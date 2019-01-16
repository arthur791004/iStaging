import styled from 'styled-components';

import compose from '@/utils/compose';
import withFadeIn from '@/utils/withFadeIn';
import Loading from '@/components/Loading';

const Thumbnail = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  filter: blur(10px);
`;

export default compose(
  withFadeIn(Loading)
)(Thumbnail);
