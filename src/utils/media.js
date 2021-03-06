import { css } from 'styled-components';

import { SCREEN_BREAK_POINTS } from '@/constants/sizes';

const generateMediaQuery = sizes =>
  Object.keys(sizes)
    .filter(mediaKey => typeof sizes[mediaKey] !== 'undefined')
    .map(mediaKey => `(${mediaKey}: ${sizes[mediaKey]}px)`)
    .join(' and ');

const createMedia = sizes => (...args) => {
  const mediaQuery = generateMediaQuery(sizes);

  return css`
    @media ${mediaQuery} {
      ${css(...args)}
    }
  `;
};

const media = Object.entries(SCREEN_BREAK_POINTS)
  .map(([size, minWidth]) => ({
    size,
    minWidth,
  }))
  .sort((a, b) => a.minWidth - b.minWidth)
  .reduce((acc, { size, minWidth }, index, array) => {
    const nextBreakPoint = array[index + 1] || {};

    return {
      ...acc,
      [size]: createMedia({
        'min-width': minWidth,
        'max-width': nextBreakPoint.minWidth,
      }),
    };
  }, {});

export default media;
