
import * as express from 'express';
import { BaseController } from '../../../../core/infra/BaseController';
import { CreateCrochetPatternDTO } from './CreateCrochetDTO';
import { CreateCrochetPatternErrors } from './CreateCrochetErrors';
import { CreateCrochetPatternUseCase } from './CreateCrochetUseCase';

export class CreateCrochetPatternController extends BaseController {
  private useCase: CreateCrochetPatternUseCase;

  constructor(useCase: CreateCrochetPatternUseCase) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<express.Response> {
    const dto: CreateCrochetPatternDTO = this.req.body;

    try {
      const result = await this.useCase.execute(dto);

      if (result.isRight()) {
        return this.ok(this.res);
      }

      const error = result.value;

      if (error.constructor && CreateCrochetPatternErrors.AccountAlreadyExists) {
        return this.conflict(error.errorMessage);
      }

      return this.fail(error.getValue());
    } catch (err) {
      return this.fail(err as Error);
    }
  }
}
