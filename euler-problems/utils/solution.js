"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSolution = void 0;
exports.RunSolution = RunSolution;
var AbstractSolution = /** @class */ (function () {
    function AbstractSolution() {
    }
    AbstractSolution.prototype.run = function (outputType) {
        return __awaiter(this, void 0, void 0, function () {
            var startDate, nodeConsole, solution, endDate;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startDate = new Date();
                        nodeConsole = console;
                        if (outputType === "console") {
                            console.log("Running solution for ".concat(this.getProblemName()));
                        }
                        else if (outputType === "json") {
                            console = {
                                log: function () { },
                                warn: function () { },
                                error: function () { },
                            };
                        }
                        return [4 /*yield*/, this.solve()];
                    case 1:
                        solution = _a.sent();
                        endDate = new Date();
                        if (outputType === "console") {
                            console.log("SOLUTION:", solution);
                            console.log("Solution took: ".concat(+endDate - +startDate, "ms"));
                        }
                        else if (outputType === "json") {
                            nodeConsole.log(JSON.stringify({
                                executionTimeMs: +endDate - +startDate,
                                solution: (solution === null || solution === void 0 ? void 0 : solution.toString()) ? solution === null || solution === void 0 ? void 0 : solution.toString() : "".concat(solution),
                            }));
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return AbstractSolution;
}());
exports.AbstractSolution = AbstractSolution;
function RunSolution(constructor) {
    var type = 'console';
    if (process.argv[2] === "json") {
        type = "json";
    }
    new constructor().run(type);
}
