import React from 'react';
import { string } from 'prop-types';

import getDisplayName from '@/utils/getDisplayName';

const withFadeIn = Placeholder => (Component) => {
  class WithFadeIn extends React.Component {
    state = {
      isLoaded: false,
    };

    componentDidMount() {
      this.loadImage();
    }

    componentDidUpdate(prevProps) {
      if (this.props.src !== prevProps.src) {
        this.loadImage();
      }
    }

    loadImage = () => {
      const { src } = this.props;
      const img = new Image();

      img.src = src;

      if (img.complete) {
        this.handleLoaded();
      } else {
        this.setState({ isLoaded: false });
        img.onload = this.handleLoaded;
      }
    }

    handleLoaded = () => {
      this.setState({ isLoaded: true });
    }

    render() {
      const { isLoaded } = this.state;

      return isLoaded ? <Component {...this.props} /> : <Placeholder {...this.props} />;
    }
  }

  WithFadeIn.propTypes = {
    src: string,
  };

  WithFadeIn.displayName = `WithSubscription(${getDisplayName(Component)})`;

  return WithFadeIn;
};

export default withFadeIn;
