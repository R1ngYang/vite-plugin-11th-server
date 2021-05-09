import { typeOptions } from "../../store/options"

const textStyle = (color: Record<string, string>) => {
    return {
        color: color.v1,
        background: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0)",
        colorHF: color.v2,
        backgroundHF: "rgba(255,255,255,0)",
        borderColorHF: "rgba(255,255,255,0)",
    }
}

const textDisabledStyle = (color: Record<string, string>) => {
    return {
        color: color.v4,
        background: "rgba(255,255,255,0)",
        borderColor: "rgba(255,255,255,0)",
        colorHF: color.v4,
        backgroundHF: "rgba(255,255,255,0)",
        borderColorHF: "rgba(255,255,255,0)",
    }
}

const plainStyle = (color: Record<string, string>) => {
    return {
        color: color.v1,
        background: color.v3,
        borderColor: color.v1,
        colorHF: "#ffffff",
        backgroundHF: color.v1,
        borderColorHF: color.v1,
    }
}

const plainDisabledStyle = (color: Record<string, string>) => {
    return {
        color: color.v4,
        background: color.v3,
        borderColor: color.v4,
        colorHF: color.v4,
        backgroundHF: color.v3,
        borderColorHF: color.v4,
    }
}

const defaultStyle = (color: Record<string, string>) => {
    return {
        color: "#ffffff",
        background: color.v1,
        borderColor: color.v1,
        colorHF: "#ffffff",
        backgroundHF: color.v2,
        borderColorHF: color.v2,
    }
}

const defaultDisabledStyle = (color: Record<string, string>) => {
    return {
        color: "#ffffff",
        background: color.v4,
        borderColor: color.v4,
        colorHF: "#ffffff",
        backgroundHF: color.v4,
        borderColorHF: color.v4,
    }
}

const styleObj: Record<string, (color: Record<string, string>) => Record<string, string>> = {
    textStyle, textDisabledStyle, plainStyle,
    plainDisabledStyle, defaultStyle, defaultDisabledStyle
}

export const getButtonStyle = (type: string, text: boolean, plain: boolean, disabled: boolean) => {
    let str = "default";
    str = plain ? "plain" : str;
    str = text ? "text" : str;
    str += disabled ? "Disabled" : "";
    str += "Style";
    const color = typeOptions[type];
    return styleObj[str](color);

}