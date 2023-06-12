"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = void 0;
var Result = /** @class */ (function () {
    function Result() {
    }
    Result.combine = function (notifications) {
        return this.failure(notifications.map(function (_a) {
            var value = _a.value;
            return value;
        }));
    };
    Result.failure = function (value) {
        return {
            value: value,
            hasError: true,
        };
    };
    Result.success = function (value) {
        return {
            value: value,
            hasError: false,
        };
    };
    return Result;
}());
exports.Result = Result;
//# sourceMappingURL=index.js.map