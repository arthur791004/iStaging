import React from 'react';
import { bool, func, shape } from 'prop-types';
import { observer } from 'mobx-react';

import getOwnPropsParams from '@/utils/getOwnPropsParams';
import withStores from '@/providers/StoresProvider/withStores';

const stores = ['panoramases'];

@withStores(stores)
@observer
class PanoramasList extends React.Component {
  componentDidMount() {
    const buildingID = getOwnPropsParams(this.props, 'buildingID');
    const { panoramases } = this.props.stores;

    panoramases.getBuildingByID(buildingID);
  }

  render() {
    const buildingID = getOwnPropsParams(this.props, 'buildingID');
    const { panoramases } = this.props.stores;

    if (panoramases.isLoading) {
      return <div>Loading...</div>;
    }

    const panoramasList = panoramases.getPanoramasListByID(buildingID);

    return (
      <div>
        {JSON.stringify(panoramasList)}
      </div>
    );
  }
}

PanoramasList.propTypes = {
  stores: shape({
    panoramases: shape({
      isLoading: bool,
      getBuildingByID: func,
      getPanoramasListByID: func,
    }),
  }),
};

export default PanoramasList;
