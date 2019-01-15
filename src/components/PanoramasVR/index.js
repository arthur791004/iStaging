import React from 'react';
import { string } from 'prop-types';
import 'aframe';

const PanoromasVR = ({ src }) => (
  <a-scene>
    <a-sky src={src} />
  </a-scene>
);

PanoromasVR.propTypes = {
  src: string,
};

export default PanoromasVR;
