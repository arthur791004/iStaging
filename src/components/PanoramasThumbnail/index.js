import React from 'react';
import { bool, func, string } from 'prop-types';
import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';

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

const ThumbnailWrapper = styled.div`
  width: 160px;
  height: 98px;
  border: 5px solid ${props => props.theme.PANORAMAS_THUMBNAIL.BORDER_COLOR};
  box-sizing: border-box;
  overflow: hidden;
`;

const Category = styled.span`
  margin-top: 5px;
  color: ${props => props.theme.PANORAMAS_THUMBNAIL.TEXT_COLOR};
  font-size: 14px;

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

const Wrapper = styled.div`
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;

  & + & {
    margin-left: 20px;
  }

  ${props => (props.isActive ? activeCSS : normalCSS)};
`;

const PanoramasThumbnail = ({ thumbnail, category, isActive, handleClick }) => (
  <Wrapper onClick={handleClick} isActive={isActive}>
    <ThumbnailWrapper>
      <Thumbnail src={thumbnail} />
    </ThumbnailWrapper>
    <Category>{category}</Category>
  </Wrapper>
);

PanoramasThumbnail.propTypes = {
  thumbnail: string,
  category: string,
  isActive: bool,
  handleClick: func,
};

export default PanoramasThumbnail;
