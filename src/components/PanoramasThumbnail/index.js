import React from 'react';
import { bool, func, number, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

import { THUMBNAIL_SIZES, CATEGORY_HEIGHT, CATEGORY_MARGIN_TOP } from './constants';

const Thumbnail = styled.div.attrs(props => ({
  style: {
    backgroundImage: `url(${props.src})`,
  },
}))`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  pointer-events: none;
  transition: transform 0.3s ease-out;
  will-change: transform;
`;

export const ThumbnailWrapper = styled.div`
  width: ${THUMBNAIL_SIZES.MEDIUM.WIDTH}px;
  height: ${THUMBNAIL_SIZES.MEDIUM.HEIGHT}px;
  border: 5px solid ${props => props.theme.PANORAMAS_THUMBNAIL.BORDER_COLOR};
  box-sizing: border-box;
  overflow: hidden;
`;

export const Category = styled.span`
  height: ${CATEGORY_HEIGHT}px;
  margin-top: ${CATEGORY_MARGIN_TOP}px;
  color: ${props => props.theme.PANORAMAS_THUMBNAIL.TEXT_COLOR};
  font-size: 14px;
  line-height: 1.2;

  ${ellipsis()};
`;

const normalCSS = css`
  &:hover {
    ${ThumbnailWrapper} {
      border-color: ${props => props.theme.PANORAMAS_THUMBNAIL.BORDER_COLOR_HOVER};
    }

    ${Thumbnail} {
      transform: scale(1.1);
    }
  }
`;

const activeCSS = css`
  ${ThumbnailWrapper} {
    border-color: ${props => props.theme.PANORAMAS_THUMBNAIL.BORDER_COLOR_ACTIVE};
  }
`;

export const Wrapper = styled.div`
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;

  &:not(:first-child) {
    margin-left: ${props => props.gap || 0}px;
  }

  ${props => (props.isActive ? activeCSS : normalCSS)};
`;

const PanoramasThumbnail = ({ src, category, isActive, handleClick, gap }) => (
  <Wrapper onClick={handleClick} isActive={isActive} gap={gap}>
    <ThumbnailWrapper>
      <Thumbnail src={src} />
    </ThumbnailWrapper>
    <Category>{category}</Category>
  </Wrapper>
);

PanoramasThumbnail.propTypes = {
  src: string,
  category: string,
  isActive: bool,
  gap: number,
  handleClick: func,
};

export default PanoramasThumbnail;
