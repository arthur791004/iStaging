import React from 'react';
import { string } from 'prop-types';
import styled from 'styled-components';
import 'aframe';

const EVENTS = {
  FADE_IN: 'fadein',
  FADE_OUT: 'fadeout',
  LOADED: 'materialtextureloaded',
};

const DURATION = 1000; // ms

const Thumbnail = styled.img.attrs(props => ({
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  filter: blur(10px);
`;

class PanoromasVR extends React.PureComponent {
  state = {
    isLoaded: false,
  };

  componentDidMount() {
    if (this.sky.current) {
      this.sky.current.addEventListener(EVENTS.LOADED, this.handleLoaded);
    }
  }

  componentDidUpdate() {
    const { id } = this.props;

    if (!this.imgSet.has(id)) {
      this.setIsLoaded();
    }
  }

  componentWillUnmount() {
    if (this.sky.current) {
      this.sky.current.removeEventListener(EVENTS.LOADED, this.handleLoaded);
    }
  }

  setIsLoaded = () => {
    const { id } = this.props;
    const isLoaded = this.imgSet.has(id);

    this.setState({ isLoaded });

    if (isLoaded) {
      this.fadeIn();
    } else {
      this.fadeOut();
    }
  };

  handleLoaded = () => {
    const { id } = this.props;

    if (this.imgSet.has(id)) {
      return;
    }

    this.imgSet.add(id);
    this.setIsLoaded();
  }

  fadeIn = () => {
    if (this.sky.current) {
      this.sky.current.emit(EVENTS.FADE_IN);
    }
  }

  fadeOut = () => {
    if (this.sky.current) {
      this.sky.current.emit(EVENTS.FADE_OUT);
    }
  }

  imgSet = new Set();
  sky = React.createRef();

  render() {
    const { src, thumbnail } = this.props;
    const { isLoaded } = this.state;

    return (
      <React.Fragment>
        <Thumbnail src={thumbnail} isLoaded={isLoaded} />
        <a-scene>
          <a-sky src={src} opacity="0" ref={this.sky}>
            <a-animation
              begin={EVENTS.FADE_IN}
              dur={DURATION}
              easing="ease-in"
              attribute="material.opacity"
              from="0"
              to="1"
            />
            <a-animation
              begin={EVENTS.FADE_OUT}
              dur={DURATION}
              easing="ease-out"
              attribute="material.opacity"
              from="1"
              to="0"
            />
          </a-sky>
        </a-scene>
      </React.Fragment>
    );
  }
}

PanoromasVR.propTypes = {
  id: string,
  src: string,
  thumbnail: string,
};

export default PanoromasVR;
