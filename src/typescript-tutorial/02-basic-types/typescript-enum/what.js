"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.what = void 0;
var what = function () {
    return "\n    What is an enum\nAn enum is a group of named constant values. Enum stands for enumerated type.\n\nTo define an enum, you follow these steps:\n\nFirst, use the enum keyword followed by the name of the enum.\nThen, define constant values for the enum.\n\n\nenum Month {\n    Jan,\n    Feb,\n    Mar,\n    Apr,\n    May,\n    Jun,\n    Jul,\n    Aug,\n    Sep,\n    Oct,\n    Nov,\n    Dec\n};\n\nWHEN TO USE ENUM:\nYou should use an enum when you:\n\nHave a small set of closely related fixed values.\nAnd these values are known at compile time\n    ";
};
exports.what = what;
var ApprovalStatus;
(function (ApprovalStatus) {
    ApprovalStatus[ApprovalStatus["draft"] = 0] = "draft";
    ApprovalStatus[ApprovalStatus["submitted"] = 1] = "submitted";
    ApprovalStatus[ApprovalStatus["approved"] = 2] = "approved";
    ApprovalStatus[ApprovalStatus["rejected"] = 3] = "rejected";
})(ApprovalStatus || (ApprovalStatus = {}));
;
