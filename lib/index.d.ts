type Optional<T> = T | null | undefined;
type Result<T, E> = Err<E> | Ok<T>;
type Ok<T> = {
    value: T;
    isOk: true;
};
type Err<T> = {
    value: T;
    isOk: false;
};
type Notifications<T> = Array<Err<T>>;
declare const Err: <T>(value: T) => Err<T>;
declare const Ok: <T>(value: Optional<void | T>) => Ok<T>;
declare const Result: {
    Ok: <T>(value: Optional<void | T>) => Ok<T>;
    Err: <T_1>(value: T_1) => Err<T_1>;
    combine: <T_2>(notifications: Notifications<T_2>) => Err<T_2[]>;
};
export { Err, Notifications, Ok, Result };
