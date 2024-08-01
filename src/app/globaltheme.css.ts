import {
  assignVars,
  createGlobalTheme,
  createGlobalThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

export const global = createGlobalThemeContract({
  background: {
    color: "bg-color",
  },
  foreground: {
    color: "fg-color",
  },
  border: {
    color: "border-color",
  },
  active: {
    color: "active-color",
  },
  nonActive: {
    color: "nonActive-color",
  },
  innerColor: {
    color: "inner-color",
  },
  fontColor: {
    color: "font-color",
  },
  warningColor: {
    color: "warning-color",
  },
});

createGlobalTheme(":root", global, {
  background: {
    color: "rgb(255, 255, 255)",
  },
  foreground: {
    color: "rgb(0, 0, 0)",
  },
  border: {
    color: "#676767",
  },
  active: {
    color: "#FFD600",
  },
  nonActive: {
    color: "#DDDDDD",
  },
  innerColor: {
    color: "#EBEBEB",
  },
  fontColor: {
    color: "#ffffff",
  },
  warningColor: {
    color: "#ff0000",
  },
});

const whiteGlobalTheme = {
  background: {
    color: "rgb(255, 255, 255)",
  },
  foreground: {
    color: "rgb(0, 0, 0)",
  },
  border: {
    color: "#676767",
  },
  active: {
    color: "#FFD600",
  },
  nonActive: {
    color: "#DDDDDD",
  },
  innerColor: {
    color: "#EBEBEB",
  },
  fontColor: {
    color: "#ffffff",
  },
  warningColor: {
    color: "#ff0000",
  },
};

const darkGlobalTheme = {
  background: {
    color: "rgb(0, 0, 0)",
  },
  foreground: {
    color: "rgb(255, 255, 255)",
  },
  border: {
    color: "#d1d1d1",
  },
};
globalStyle(":root", {
  "@media": {
    "(prefers-color-scheme: white)": {
      vars: assignVars(global, whiteGlobalTheme),
    },
  },
});
globalStyle("*", {
  boxSizing: "border-box",
  padding: 0,
  margin: 0,
  color: "black",
  fontFamily: "'Helvetica Now Display'",
});
globalStyle("html", {
  "@media": {
    "(prefers-color-scheme: dark)": {
      colorScheme: "dark",
    },
  },
});
globalStyle("html, body", {
  maxWidth: "100dvw",
  overflowX: "hidden",
});
globalStyle("body", {
  display: "flex",
  justifyContent: "center",
  backgroundColor: global.background.color,
});
globalStyle("a", {
  color: "inherit",
  textDecoration: "none",
});
globalStyle("input", {
  backgroundColor: "#EBEBEB",
});
