import { Router } from 'express';
import { ValidationPaymentSplipController } from './modules/paymentSplip/UseCases/ValidationPaymentSplip/ValidationPaymentSplipController';

const routes = Router();

const validationPaymentSplipController = new ValidationPaymentSplipController();

routes.get('/boleto/:line', validationPaymentSplipController.handle);

export { routes };
