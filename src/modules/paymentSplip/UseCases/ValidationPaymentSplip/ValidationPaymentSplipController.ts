import { Request, Response } from 'express';
import { ValidationPaymentSplipUseCase } from './ValidationPaymentSplipUseCase';

export class ValidationPaymentSplipController {
  handle(request: Request, response: Response) {
    const paymentSplipUseCase = new ValidationPaymentSplipUseCase();
    const { line } = request.params;

    const result = paymentSplipUseCase.execute(line);

    return response.json(result);
  }
}
