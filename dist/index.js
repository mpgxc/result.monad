"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
class Result {
    static combine(notifications) {
        return this.failure(notifications.map(({ value }) => value));
    }
    static failure(value) {
        return {
            value,
            hasError: true,
        };
    }
    static success(value) {
        return {
            value: value,
            hasError: false,
        };
    }
}
exports.Result = Result;
