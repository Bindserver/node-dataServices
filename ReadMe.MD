# DataServices API interface for NodeJS

A NodeJS libary to connect and send API requests to the Bindserver DataServices Server

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Installing

Run the following command in npm

```
npm install --save node-dataservices-bind
```

## Example/Deployment

Require in the module as follows

```js
const DataServices = require('./data-services.js');
const dSrv = new DataServices();
```

then run this test command

```js
dSrv.serverPost("getRaw", ```Insert your media URL here``` , function(data){
  console.log(data.Data[0]); //This should return a https://data-services.bindserver.com/ link
});
```

## Built With

* [Needle](https://www.npmjs.com/package/needle) - A HTTP client for NodeJS

## Authors

* **KillerDucks** - *Initial work* - [PurpleBooth](https://github.com/KillerDucks)

See also the list of [contributors](https://github.com/KillerDucks/node-dataServices/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
