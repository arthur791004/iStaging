import router from '@/stores/router';

const stores = {
  router,
};

export const getStore = (storeName) => {
  if (stores[storeName]) {
    return Promise.resolve(stores[storeName]);
  }

  return import(/* webpackChunkName: "[request]" */`./${storeName}`)
    .then((module) => {
      stores[storeName] = module.default;

      return stores[storeName];
    });
};
