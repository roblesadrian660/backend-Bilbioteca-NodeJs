const { createContainer, asClass, asValue, asFunction } = require('awilix');

//config
const config = require('../config');
const app = require('.');
// Services
const { HomeService, UserService, IdeaService, CommentService } = require('../services');
//controllers
const { HomeController } = require('../controllers');
//router
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');
//models
const { User, Comment, Idea } = require('../models');
//Repositories
const { UserRepository, CommentRepository, IdeaRepository } = require('../repositories');


const container = createContainer();

container
    .register({
        app: asClass(app).singleton(),
        Routes: asFunction(Routes).singleton(),
        config: asValue(config)
    })
    .register({
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        IdeaService: asClass(IdeaService).singleton(),
        CommentService: asClass(CommentService).singleton()
    })
    .register({
        HomeController: asClass(HomeController.bind(HomeController)).singleton()
    })
    .register({
        HomeRoutes: asFunction(HomeRoutes).singleton()
    })
    .register({
        User: asValue(User),
        Idea: asValue(Idea),
        Comment: asValue(Comment)
    }).register({
        UserRepository: asClass(UserRepository).singleton(),
        CommentRepository: asClass(CommentRepository).singleton(),
        IdeaRepository: asClass(IdeaRepository).singleton()
    });

module.exports = container