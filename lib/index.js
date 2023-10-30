"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Result = exports.Ok = exports.Err = void 0;
var combine = function (notifications) {
    return Err(notifications.map(function (_a) {
        var value = _a.value;
        return value;
    }));
};
var Err = function (value) { return ({
    value: value,
    isOk: false,
}); };
exports.Err = Err;
var Ok = function (value) { return ({
    value: value,
    isOk: true,
}); };
exports.Ok = Ok;
var Result = {
    Ok: Ok,
    Err: Err,
    combine: combine,
};
exports.Result = Result;
//# sourceMappingURL=index.js.map