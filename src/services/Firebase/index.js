import firebaseApp from '@firebase/app';
import '@firebase/database';

import ENVS from '@/services/ENVS';

class Firebase {
  app = null;
  db = null;
  ref = {};

  init = () => {
    if (this.app) {
      return;
    }

    const databaseURL = ENVS.FIREBASE_DATABASE_URL;
    const serviceAccount = window.atob(ENVS.FIREBASE_SERVICE_ACCOUNT);

    this.app = firebaseApp.initializeApp({
      databaseURL,
      serviceAccount,
    });

    this.db = this.app.database();
  };

  getRef = (name) => {
    if (!this.db) {
      this.init();
    }

    if (!this.ref[name]) {
      this.ref[name] = this.db.ref(name);
    }

    return this.ref[name];
  }

  close = () => {
    if (this.db) {
      this.db.goOffline();
    }

    if (this.app) {
      this.app.delete();
    }
  }
}

export default new Firebase();
