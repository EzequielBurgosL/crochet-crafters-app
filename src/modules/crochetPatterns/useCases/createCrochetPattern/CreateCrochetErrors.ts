
import { Result } from '../../../../core/logic/Result';
import { UseCaseError } from '../../../../core/logic/UseCaseError';

export namespace CreateCrochetPatternErrors {
  export class AccountAlreadyExists extends Result<UseCaseError> {
    constructor(email: string) {
      super(false, `The email ${email} associated for this account already exists`);
    }
  }
}
