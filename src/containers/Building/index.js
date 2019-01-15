import React from 'react';
import { bool, func, shape } from 'prop-types';
import { observer } from 'mobx-react';

import getOwnPropsParams from '@/utils/getOwnPropsParams';
import withStores from '@/providers/StoresProvider/withStores';
import LazyPanoramasVR from '@/components/PanoramasVR/Lazy';

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
    const panoramasList = panoramases.selectPanoramasList(buildingID);

    if (panoramases.isLoading || panoramasList.length === 0) {
      return <div>Loading...</div>;
    }

    return (
      <React.Suspense fallback="Loading...">
        <LazyPanoramasVR src={panoramases.getPanoramasURL(panoramasList[0])} />
      </React.Suspense>
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
