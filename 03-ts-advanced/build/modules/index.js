"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Named import
const fortune_1 = require("./fortune");
// Default Import
const maths_1 = __importDefault(require("./maths"));
console.log("Today's fortune : ", (0, fortune_1.getDailyFortune)());
console.log("Your lucky number today : ", fortune_1.LUCKY_NUMBER);
console.log("Sum is : ", (0, maths_1.default)(4, 6));
