"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const DefaultTheme_1 = __importDefault(require("./DefaultTheme"));
const theme = Object.assign(Object.assign({}, DefaultTheme_1.default), { type: "dark", isDark: true, primary: {
        main: "#D3FF52",
        light: "#E3FE9C",
        dark: "#B2D30B",
        darker: "#B2D30B"
    }, background: "#212121", text: {
        secondary: "#F2F2F2",
        main: "#FFFFFF"
    } });
exports.default = theme;
