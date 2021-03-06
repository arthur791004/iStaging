import React from 'react';
import { bool, func, shape } from 'prop-types';
import { observer } from 'mobx-react';

import getOwnPropsParams from '@/utils/getOwnPropsParams';
import withStores from '@/providers/StoresProvider/withStores';
import Loading from '@/components/Loading';
import LazyPanoramasVR from '@/components/PanoramasVR/Lazy';
import LazyPanoramasList from '@/components/PanoramasList/Lazy';
import Error from './Error';

const stores = ['panoramases'];

@withStores(stores)
@observer
class PanoramasList extends React.Component {
  state = {
    selected: 0,
  };

  componentDidMount() {
    const buildingID = getOwnPropsParams(this.props, 'buildingID');
    const { panoramases } = this.props.stores;

    panoramases.getBuildingByID(buildingID);
  }

  handleChange = (selected) => {
    this.setState({ selected });
  }

  render() {
    const buildingID = getOwnPropsParams(this.props, 'buildingID');
    const { panoramases } = this.props.stores;
    const { selected } = this.state;
    const panoramasList = panoramases.selectPanoramasList(buildingID);

    if (panoramases.error) {
      return <Error>{`Oops...${panoramases.error}`}</Error>;
    } else if (panoramases.isLoading || panoramasList.length === 0) {
      return <Loading />;
    }

    const { id, src, thumbnail } = panoramasList[selected];

    return (
      <React.Fragment>
        <React.Suspense fallback={<Loading />}>
          <LazyPanoramasVR id={id} src={src} thumbnail={thumbnail} />
        </React.Suspense>
        <React.Suspense fallback="">
          <LazyPanoramasList
            panoramasList={panoramasList}
            selected={selected}
            handleClick={this.handleChange}
          />
        </React.Suspense>
      </React.Fragment>
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
