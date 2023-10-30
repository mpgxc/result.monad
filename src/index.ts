type Ok<T> = {
  value: T;
  isOk: true;
};

type Err<T> = {
  value: T;
  isOk: false;
};

type Notifications<T> = Array<Err<T>>;

type Result<T, E> = Err<E> | Ok<T>;

const combine = <T>(notifications: Notifications<T>): Err<T[]> =>
  Err(notifications.map(({ value }) => value));

const Err = <T>(value: T): Err<T> => ({
  value,
  isOk: false,
});

const Ok = <T>(value?: T): Ok<T> => ({
  value,
  isOk: true,
});

const Result = {
  Ok,
  Err,
};

export { Result, Ok, Err, Notifications };
