"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeChangeContext = void 0;
const react_1 = __importStar(require("react"));
const react_2 = require("@emotion/react");
const theme_1 = __importDefault(require("../theme"));
exports.ThemeChangeContext = (0, react_1.createContext)({
    isDark: false,
    toggleMode: () => { }
});
const ThemeProvider = ({ children }) => {
    const [isDark, setDark] = (0, react_1.useState)(false);
    const toggleMode = (0, react_1.useCallback)(() => {
        setDark((prevMode) => !prevMode);
    }, []);
    return (react_1.default.createElement(exports.ThemeChangeContext.Provider, { value: {
            isDark,
            toggleMode
        } },
        react_1.default.createElement(react_2.ThemeProvider, { theme: isDark ? theme_1.default.DarkTheme : theme_1.default.LightTheme }, children)));
};
exports.default = ThemeProvider;
