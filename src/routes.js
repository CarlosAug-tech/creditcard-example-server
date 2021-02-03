import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import ProductController from './app/controllers/ProductController';
import CheckoutController from './app/controllers/CheckoutController';

import authMiddleware from './app/middlewares/auth';
import adminMiddleware from './app/middlewares/admin';

import FileController from './app/controllers/FileController';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/products', ProductController.index);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.post('/checkouts', CheckoutController.store);

routes.put('/users', UserController.update);

routes.get('/products/:id', ProductController.show);

routes.post('/files', upload.single('file'), FileController.store);

routes.use(adminMiddleware);

routes.post('/products', ProductController.store);

export default routes;
