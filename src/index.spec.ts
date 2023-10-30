import { Err, Notifications, Ok, Result } from ".";

describe("Result", () => {
  describe("Err", () => {
    it("should have isOk as true and value defined correctly", () => {
      const failure: Err<string> = {
        value: "Error",
        isOk: false,
      };

      expect(failure.isOk).toBeFalsy();
      expect(failure.value).toBe("Error");
    });
  });

  describe("Ok", () => {
    it("should have isOk as false and value defined correctly", () => {
      const success: Ok<number> = {
        value: 10,
        isOk: true,
      };
      expect(success.isOk).toBeTruthy();
      expect(success.value).toBe(10);
    });
  });

  describe("Result", () => {
    it("should be of type Err when isOk is true", () => {
      const either: Result<string, number> = {
        value: "Error",
        isOk: true,
      };
      expect(either.isOk).toBeTruthy();
      expect(either.value).toBe("Error");
    });

    it("should be of type Ok when isOk is false", () => {
      const either: Result<string, number> = {
        value: 10,
        isOk: false,
      };
      expect(either.isOk).toBeFalsy;
      expect(either.value).toBe(10);
    });
  });
});

describe("Result", () => {
  describe("combine", () => {
    it("should return a Err containing an array with the notification values", () => {
      const notifications: Notifications<string> = [
        { value: "Notification 1", isOk: false },
        { value: "Notification 2", isOk: false },
        { value: "Notification 3", isOk: false },
      ];

      const combinedResult = Result.combine(notifications);

      expect(combinedResult.isOk).toBeFalsy;
      expect(combinedResult.value).toEqual([
        "Notification 1",
        "Notification 2",
        "Notification 3",
      ]);
    });
  });

  describe("failure", () => {
    it("should return a Err with the value defined correctly", () => {
      const failure = Result.Err("Error");

      expect(failure.isOk).toBeFalsy;
      expect(failure.value).toBe("Error");
    });
  });

  describe("success", () => {
    it("should return a Ok with the value defined correctly", () => {
      const success = Result.Ok(10);

      expect(success.isOk).toBeTruthy();
      expect(success.value).toBe(10);
    });

    it("should return a Ok with undefined value when no value is passed", () => {
      const success = Result.Ok();

      expect(success.isOk).toBeTruthy();
      expect(success.value).toBeUndefined();
    });
  });
});
