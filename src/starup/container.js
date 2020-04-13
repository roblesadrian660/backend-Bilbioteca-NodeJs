const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');
// Services
const { HomeService } = require('../services');
//controllers
const { HomeController } = require('../controllers');
//router
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        Routes: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    });

module.exports = container