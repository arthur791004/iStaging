import styled, { keyframes } from 'styled-components';
import InlineSVG from 'react-inlinesvg';
import loadingCircle from '@/assets/loading-circle.svg';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Loading = styled(InlineSVG).attrs(({ size = 30 }) => ({
  src: loadingCircle,
  size,
}))`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  animation: ${rotate} 0.9s linear infinite;
  will-change: transform;

  svg {
    height: ${props => props.size}px;
    width: ${props => props.size}px;
  }
`;

export default Loading;
