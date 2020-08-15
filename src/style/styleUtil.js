import styleConfig from "./styleConfig";

const themeColor = styleConfig.themeColor;
const themeColorRgb = `${themeColor[0]}, ${themeColor[1]}, ${themeColor[2]}`;
const hoverColor = `rgba(${themeColorRgb},0.5)`;
const focusColor = `rgba(${themeColorRgb},0.5)`;
const activeColor = `rgba(${themeColorRgb},0.8)`;

const backgroundColor = styleConfig.backgroundColor;
const backgroundColorRgb = `${backgroundColor[0]}, ${backgroundColor[1]}, ${backgroundColor[2]}`;
const background = `rgba(${backgroundColorRgb},0.3)`;

export default { hoverColor, focusColor, activeColor, background };
