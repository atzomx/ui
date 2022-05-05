"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("@emotion/react");
const LightTheme_1 = __importDefault(require("./LightTheme"));
const DarkTheme_1 = __importDefault(require("./DarkTheme"));
exports.default = {
    LightTheme: LightTheme_1.default,
    DarkTheme: DarkTheme_1.default
};
