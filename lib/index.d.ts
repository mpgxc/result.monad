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
declare class Result {
    static combine<T>(notifications: Notifications<T>): Failure<T[], never>;
    static failure<T>(value: T): Failure<T, never>;
    static success<T>(value?: T): Success<never, T>;
}
export { Either, Failure, Notifications, Result, Success };
