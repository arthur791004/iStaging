import React from 'react';
import StoreProvider from '.';

const withStore = storeNames => Component => props => (
  <StoreProvider storeNames={storeNames}>
    {stores => <Component stores={stores} {...props} />}
  </StoreProvider>
);

export default withStore;
