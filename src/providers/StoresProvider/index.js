import React from 'react';
import { arrayOf, func, string } from 'prop-types';

import { getStore } from '@/stores';

class StoreProvider extends React.Component {
  state = {
    isLoading: true,
    stores: {},
  };

  componentDidMount() {
    const { storeNames } = this.props;

    Promise.all(storeNames.map(storeName => getStore(storeName)))
      .then((stores) => {
        const storesMap = stores.reduce((acc, store, index) => ({
          ...acc,
          [storeNames[index]]: store,
        }), {});

        this.setStores(storesMap);
      });
  }

  setStores = (stores) => {
    this.setState({
      stores,
      isLoading: false,
    });
  }

  render() {
    const { children } = this.props;
    const { isLoading, stores } = this.state;

    if (isLoading) {
      return null;
    }

    return children(stores);
  }
}

StoreProvider.propTypes = {
  storeNames: arrayOf(string),
  children: func,
};

export default StoreProvider;
