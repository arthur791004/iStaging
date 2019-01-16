import React from 'react';
import { arrayOf, func, number, string, shape } from 'prop-types';
import styled from 'styled-components';

import LazyPanoramasThumbnail from '@/components/PanoramasThumbnail/Lazy';
// import PanoramasThumbnailPlaceholder from '@/components/PanoramasThumbnail/Placeholder';
import { GAP } from './constants';

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  padding: ${GAP}px;
  background-color: ${props => props.theme.PANORAMAS_LIST.BG};
  overflow-x: auto;

  &:after {
    content: '';
    width: ${GAP}px;
    flex-shrink: 0;
  }
`;

const PanoramasList = ({ panoramasList, selected, handleClick }) => (
  <Wrapper>
    <React.Suspense fallback="">
      {panoramasList.map(({ id, index, thumbnail, category }) => (
        <LazyPanoramasThumbnail
          key={id}
          thumbnail={thumbnail}
          category={category}
          isActive={index === selected}
          gap={GAP}
          handleClick={() => handleClick(index)}
        />
      ))}
    </React.Suspense>
  </Wrapper>
);

PanoramasList.propTypes = {
  panoramasList: arrayOf(shape({
    index: number,
    thumbnail: string,
    category: string,
  })),
  selected: number,
  handleClick: func,
};

export default PanoramasList;
