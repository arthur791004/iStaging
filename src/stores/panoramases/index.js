import { action, observable } from 'mobx';
import { createTransformer } from 'mobx-utils';

import { isHandheld } from '@/services/Devices';
import Firebase from '@/services/Firebase';
import { NAME, ORDER_KEY } from './constants';

const formatPanoramas = (id, panoramas) => {
  if (!(panoramas && panoramas.data)) {
    return {};
  }

  const {
    index,
    mobileUrl,
    desktopUrl,
    thumbnail,
    category,
  } = panoramas.data;

  return {
    id,
    index,
    thumbnail,
    category,
    src: isHandheld() ? mobileUrl : desktopUrl,
  };
};

class Panoramases {
  @observable isLoading = false;
  @observable error = null;
  @observable panoramases = {};
  @observable buildings = {};

  selectPanoramasList = createTransformer((buildingID) => {
    const panoramases = this.buildings[buildingID] || [];

    return panoramases
      .map(panoramasID => formatPanoramas(panoramasID, this.panoramases[panoramasID]))
      .sort((a, b) => a.index - b.index);
  });

  @action.bound
  getBuildingByID(buildingID) {
    if (this.isLoading) {
      return;
    }

    this.setIsLoading(true);

    const refPanoramas = Firebase.getRef(NAME)
      .orderByChild(ORDER_KEY)
      .equalTo(buildingID);

    refPanoramas.once('value')
      .then((snapshot) => {
        const panoramases = snapshot.val();

        if (!panoramases) {
          throw new Error(`Cannot find panoramases with buildingID: ${buildingID}`);
        }

        this.setBuilding(buildingID, panoramases);
        this.setPanoramases(panoramases);
      })
      .catch((error) => {
        this.setError(error);
      })
      .then(() => {
        this.setIsLoading(false);
      });
  }

  @action.bound
  setBuilding(buildingID, panoramases) {
    this.buildings[buildingID] = Object.keys(panoramases);
  }

  @action.bound
  setPanoramases(panoramases) {
    this.panoramases = Object.assign(this.panoramases, panoramases);
  }

  @action.bound
  setIsLoading(isLoading) {
    this.isLoading = isLoading;
  }

  @action.bound
  setError(error) {
    this.error = error.message;
  }
}

export default new Panoramases();
