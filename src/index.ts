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

const combine = <T>(notifications: Notifications<T>): Err<T[]> =>
  Err(notifications.map(({ value }) => value));

const Err = <T>(value: T): Err<T> => ({
  value,
  isOk: false,
});

const Ok = <T>(value: Optional<T | void>): Ok<T> => ({
  value: value as T,
  isOk: true,
});

const Result = {
  Ok,
  Err,
  combine,
};

export { Err, Notifications, Ok, Result };
