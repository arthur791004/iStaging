import React from 'react';
import { func } from 'prop-types';

import createIntersectionObserver from '@/utils/createIntersectionObserver';

class Visibility extends React.Component {
  state = {
    visible: false,
  };

  componentDidMount() {
    if (!this.ref.current) {
      return;
    }

    this.observer = createIntersectionObserver(this.handleIntersection);
    this.observer.observe(this.ref.current);
  }

  handleIntersection = (entries, threshold) => {
    const isIntersection = entries.some(entry =>
      entry.isIntersecting && entry.intersectionRatio > threshold
    );

    if (isIntersection) {
      this.setState({ visible: true });
      this.disconnect();
    }
  }

  disconnect = () => {
    if (!this.observer) {
      return;
    }

    if (this.ref.current) {
      this.observer.unobserve(this.ref.current);
    }

    this.observer.disconnect();
  }

  ref = React.createRef();

  render() {
    const { children } = this.props;
    const { visible } = this.state;

    return children({ visible, ref: this.ref });
  }
}

Visibility.propTypes = {
  children: func,
};

export default Visibility;
