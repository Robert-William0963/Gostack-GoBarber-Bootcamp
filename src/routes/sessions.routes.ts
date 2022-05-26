import { createConnection, Any } from 'typeorm';
import { Router, response } from 'express';

import AuthenticadeUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

/**
 * Repositories
 * Services
 */

sessionsRouter.post('/', async (request, response) => {

        const {email, password} = request.body;

        const authenticateUser = new AuthenticadeUserService();

        const {user, token} = await authenticateUser.execute({
            email,
            password,
        })

        delete user.password;

        return response.status(err.statusCode).json({user, token});
});

export default sessionsRouter;




