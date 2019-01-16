import compose from '@/utils/compose';
import withFadeIn from '@/utils/withFadeIn';
import withVisibility from '@/components/Visibility/withVisibility';
import PanoramasThumbnail from './PanoramasThumbnail';
import Placeholder from './Placeholder';

export default compose(
  withVisibility(Placeholder),
  withFadeIn(Placeholder),
)(PanoramasThumbnail);
