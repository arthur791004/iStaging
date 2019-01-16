# iStaging Demo

## Environment
- node: v10.15.0
- yarn: v1.9.4
- browser: latest chrome

## Development

### setup
- gen base64 of serviceAccountKey of firebase
  ```
  $ base64 serviceAccountKey.json
  ```
- setup `.env`
  ```
  REACT_APP_FIREBASE_DATABASE_URL=<FIREBASE_DATABASE_URL>
  REACT_APP_FIREBASE_SERVICE_ACCOUNT=<base64 of FIREBASE_SERVICE_ACCOUNT>
  ```

### run
```bash
$ yarn install
$ yarn start
```

## Demo URL
- [production](https://arthur791004.github.io/iStaging/building/483490)
- [development](http://localhost:3000/building/483490)

## Tech Stack
- react v16.7.0
- mobx v5
- react-router v4
- styled-components v4
- firebase
- aframe

## Folder Structure
```bash
├── README.md
├── babel.config.js
├── build/
├── package.json
├── public/          # public assets, eg: favicon, index.html
├── src/
│   ├── App.js       # root component
│   ├── assets       # assets is used by other components
│   ├── components
│   ├── constants    # components with data from props
│   ├── containers   # components with data from stores and props
│   ├── index.js
│   ├── pages        # components for the entry of routing path
│   ├── providers    # data provider, eg: store
│   ├── services
│   ├── setup        # setup before render app
│   ├── stores       # stores of mobx
│   └── utils
└── yarn.lock
```