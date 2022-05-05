"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultTheme_1 = __importDefault(require("./DefaultTheme"));
const theme = Object.assign(Object.assign({}, DefaultTheme_1.default), { type: "light", isDark: false, primary: {
        main: "#D3FF52",
        light: "#E3FE9C",
        dark: "#cdf851",
        darker: "#B2D30B",
    }, background: "#ffffff", text: {
        secondary: "#50514F",
        main: "#000000",
    } });
exports.default = theme;
