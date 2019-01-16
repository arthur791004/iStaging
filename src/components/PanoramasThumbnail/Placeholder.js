import React from 'react';
import styled, { keyframes } from 'styled-components';

import { Wrapper, ThumbnailWrapper, Category } from './PanoramasThumbnail';
import { PLACEHOLDER_BG, PLACEHOLDER_BG_SHINE } from './constants';

const shine = keyframes`
  0% {
    background-position: 0;
  }

  40%, 100% {
    background-position: 100px;
  }
`;

const PlaceholderWrapper = styled(Wrapper)`
  ${ThumbnailWrapper},
  ${Category} {
    background-size: 600px;
    background-image: linear-gradient(
      to right,
      ${PLACEHOLDER_BG} 0px,
      ${PLACEHOLDER_BG_SHINE} 40px,
      ${PLACEHOLDER_BG} 80px
    );

    animation: ${shine} 1s ease-out infinite;
    will-change: background-position;
    cursor: default;
  }

  ${ThumbnailWrapper} {
    border: none;
  }

  ${Category} {
    width: 100%;
  }
`;

const Placeholder = React.forwardRef((props, ref) => (
  <PlaceholderWrapper {...props} ref={ref}>
    <ThumbnailWrapper />
    <Category />
  </PlaceholderWrapper>
));

export default Placeholder;
