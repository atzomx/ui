"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondaryButtonStyled = exports.PrimaryButtonStyled = void 0;
const styled_1 = __importDefault(require("@emotion/styled"));
const BaseButtonStyled = styled_1.default.button(({ theme }) => ({
    border: "none",
    cursor: "pointer",
    borderRadius: theme === null || theme === void 0 ? void 0 : theme.spacing(4),
    padding: theme === null || theme === void 0 ? void 0 : theme.spacing(2, 6),
    fontSize: theme === null || theme === void 0 ? void 0 : theme.spacing(2),
    fontWeight: 600,
    letterSpacing: 1.5,
    height: theme === null || theme === void 0 ? void 0 : theme.spacing(7),
    color: (theme === null || theme === void 0 ? void 0 : theme.isDark) ? theme === null || theme === void 0 ? void 0 : theme.black : theme === null || theme === void 0 ? void 0 : theme.white,
    display: "flex",
    alignItems: "center",
    gap: 10
}));
exports.PrimaryButtonStyled = (0, styled_1.default)(BaseButtonStyled)(({ theme }) => ({
    backgroundColor: (theme === null || theme === void 0 ? void 0 : theme.isDark) ? theme === null || theme === void 0 ? void 0 : theme.primary.main : theme === null || theme === void 0 ? void 0 : theme.black,
    color: (theme === null || theme === void 0 ? void 0 : theme.isDark) ? theme === null || theme === void 0 ? void 0 : theme.black : theme === null || theme === void 0 ? void 0 : theme.white,
    "&:hover": {
        opacity: 0.8
    }
}));
exports.SecondaryButtonStyled = (0, styled_1.default)(BaseButtonStyled)(({ theme }) => ({
    backgroundColor: "unset",
    color: (theme === null || theme === void 0 ? void 0 : theme.isDark) ? theme === null || theme === void 0 ? void 0 : theme.primary.main : theme === null || theme === void 0 ? void 0 : theme.black,
    border: `2px solid ${(theme === null || theme === void 0 ? void 0 : theme.isDark) ? theme === null || theme === void 0 ? void 0 : theme.primary.main : theme === null || theme === void 0 ? void 0 : theme.black}`,
    "&:hover": {
        opacity: 0.8
    }
}));
