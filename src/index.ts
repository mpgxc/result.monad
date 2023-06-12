type Success<F, S> = {
  value: S;
  hasError: false;
};

type Failure<F, S> = {
  value: F;
  hasError: true;
};

type Either<F, S> = Failure<F, never> | Success<never, S>;

type Notifications<T> = Array<Failure<T, never>>;

class Result {
  static combine<T>(notifications: Notifications<T>): Failure<T[], never> {
    return this.failure(notifications.map(({ value }) => value));
  }

  static failure<T>(value: T): Failure<T, never> {
    return {
      value,
      hasError: true,
    };
  }

  static success<T>(value?: T): Success<never, T> {
    return {
      value: value as T,
      hasError: false,
    };
  }
}

export { Either, Failure, Notifications, Result, Success };
