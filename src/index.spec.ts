import { Either, Failure, Notifications, Result, Success } from ".";

describe("Either", () => {
  describe("Failure", () => {
    it("should have hasError as true and value defined correctly", () => {
      const failure: Failure<string, number> = {
        value: "Error",
        hasError: true,
      };
      expect(failure.hasError).toBe(true);
      expect(failure.value).toBe("Error");
    });
  });

  describe("Success", () => {
    it("should have hasError as false and value defined correctly", () => {
      const success: Success<string, number> = {
        value: 10,
        hasError: false,
      };
      expect(success.hasError).toBe(false);
      expect(success.value).toBe(10);
    });
  });

  describe("Either", () => {
    it("should be of type Failure when hasError is true", () => {
      const either: Either<string, number> = {
        value: "Error",
        hasError: true,
      };
      expect(either.hasError).toBe(true);
      expect(either.value).toBe("Error");
    });

    it("should be of type Success when hasError is false", () => {
      const either: Either<string, number> = {
        value: 10,
        hasError: false,
      };
      expect(either.hasError).toBe(false);
      expect(either.value).toBe(10);
    });
  });
});

describe("Result", () => {
  describe("combine", () => {
    it("should return a Failure containing an array with the notification values", () => {
      const notifications: Notifications<string> = [
        { value: "Notification 1", hasError: true },
        { value: "Notification 2", hasError: true },
        { value: "Notification 3", hasError: true },
      ];

      const combinedResult = Result.combine(notifications);

      expect(combinedResult.hasError).toBe(true);
      expect(combinedResult.value).toEqual([
        "Notification 1",
        "Notification 2",
        "Notification 3",
      ]);
    });
  });

  describe("failure", () => {
    it("should return a Failure with the value defined correctly", () => {
      const failure = Result.failure("Error");

      expect(failure.hasError).toBe(true);
      expect(failure.value).toBe("Error");
    });
  });

  describe("success", () => {
    it("should return a Success with the value defined correctly", () => {
      const success = Result.success(10);

      expect(success.hasError).toBe(false);
      expect(success.value).toBe(10);
    });

    it("should return a Success with undefined value when no value is passed", () => {
      const success = Result.success();

      expect(success.hasError).toBe(false);
      expect(success.value).toBeUndefined();
    });
  });
});
