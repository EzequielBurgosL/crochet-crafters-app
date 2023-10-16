interface IUseCaseErrorError {
  message: string;
}

// Test using a mock class extending UseCaseError
export abstract class UseCaseError implements IUseCaseErrorError {
  public readonly message: string;

  constructor(message: string) {
    this.message = message;
  }
}
