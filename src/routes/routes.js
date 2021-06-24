import express from 'express';
import HomeController from '../controllers/homeController.js';
import AuthController from '../controllers/authController.js';

function initRoutes() {
    var router = express.Router();
    
    router.get('/', async (req, res) => {
        var controller = new HomeController();

        //TODO: Implement try catch here.
        await controller.index(req, res);
    });

    router.post('/login', async (req, res) => {
        var controller = new AuthController();

        //TODO: Implement try catch here.
        await controller.login(req, res);
    });

    return router;
}

export default initRoutes();