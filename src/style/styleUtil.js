import styleConfig from "./styleConfig";

const themeColorArray = styleConfig.themeColor;
const themeColorRgb = `${themeColorArray[0]}, ${themeColorArray[1]}, ${themeColorArray[2]}`;

const themeColor = `rgba(${themeColorRgb},1)`;
const hoverColor = `rgba(${themeColorRgb},0.5)`;
const focusColor = `rgba(${themeColorRgb},0.5)`;
const activeColor = `rgba(${themeColorRgb},0.8)`;

const backgroundColor = styleConfig.backgroundColor;
const backgroundColorRgb = `${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]}`;
const background = `rgba(${backgroundColorRgb},0.3)`;

const headerHeight = styleConfig.headerHeight || "60px";
const headerColor = styleConfig.headerColor || themeColor;

const asideWidth = styleConfig.asideWidth || "60px";
const asideColor = styleConfig.asideColor || themeColor;

export default {
    themeColor,
    hoverColor,
    focusColor,
    activeColor,
    background,
    headerHeight,
    headerColor,
    asideColor,
    asideWidth,
};
