import { action, observable } from 'mobx';

import Firebase from '@/services/Firebase';
import { NAME, ORDER_KEY } from './constants';

class Panoramases {
  @observable isLoading = false;
  @observable error = null;
  @observable panoramases = {};
  @observable buildings = {};

  getPanoramasListByID(buildingID) {
    const panoramases = this.buildings[buildingID] || [];

    return panoramases.map(panoramasID => this.panoramases[panoramasID]);
  }

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
        this.setBuilding(buildingID, snapshot.val());
        this.setIsLoading(false);
      });
  }

  @action.bound
  setBuilding(buildingID, panoramases) {
    this.buildings[buildingID] = Object.keys(panoramases);
    this.setPanoramases(panoramases);
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
