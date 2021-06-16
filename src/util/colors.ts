export const colors: Record<string, string> = {
    black: '#000',
    silver: '#C0C0C0',
    gray: '#808080',
    white: '#FFF',
    maroon: '#800000',
    red: '#F00',
    purple: '#800080',
    fuchsia: '#F0F',
    green: '#008000',
    lime: '#0F0',
    olive: '#808000',
    yellow: '#FF0',
    navy: '#000080',
    blue: '#00F',
    teal: '#008080',
    aqua: '#0FF',
    transparent: '#0000'
};


type RGBA = [number, number, number, number];
type RGB = [number, number, number];
const prefix = '^\\s*';
const suffix = '\\s*$';
const float = '\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*'; // 4 offset
const hex = '([0-9A-Fa-f])';
const dhex = '([0-9A-Fa-f]{2})';
const rgbRegex = new RegExp(`${prefix}rgb\\s*\\(${float},${float},${float}\\)${suffix}`);
const rgbaRegex = new RegExp(`${prefix}rgba\\s*\\(${float},${float},${float},${float}\\)${suffix}`);
const sHexRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${suffix}`);
const hexRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${suffix}`);
const sHexaRegex = new RegExp(`${prefix}#${hex}${hex}${hex}${hex}${suffix}`);
const hexaRegex = new RegExp(`${prefix}#${dhex}${dhex}${dhex}${dhex}${suffix}`);

const parseHex = (value: string): number => {
    return parseInt(value, 16);
}

const rgba = (color: string): RGB | RGBA => {
    try {
        let i;
        if ((i = hexRegex.exec(color))) {
            return [parseHex(i[1]), parseHex(i[2]), parseHex(i[3]), 1];
        } else if ((i = rgbRegex.exec(color))) {
            return [roundChannel(i[1]), roundChannel(i[5]), roundChannel(i[9]), 1];
        } else if ((i = rgbaRegex.exec(color))) {
            return [
                roundChannel(i[1]),
                roundChannel(i[5]),
                roundChannel(i[9]),
                roundAlpha(i[13])
            ];
        } else if ((i = sHexRegex.exec(color))) {
            return [
                parseHex(i[1] + i[1]),
                parseHex(i[2] + i[2]),
                parseHex(i[3] + i[3]),
                1
            ];
        } else if ((i = hexaRegex.exec(color))) {
            return [
                parseHex(i[1]),
                parseHex(i[2]),
                parseHex(i[3]),
                roundAlpha(parseHex(i[4]) / 255)
            ];
        } else if ((i = sHexaRegex.exec(color))) {
            return [
                parseHex(i[1] + i[1]),
                parseHex(i[2] + i[2]),
                parseHex(i[3] + i[3]),
                roundAlpha(parseHex(i[4] + i[4]) / 255)
            ];
        } else if (color in colors) {
            return rgba(colors[color]);
        }
        throw new Error(`[seemly/rgba]: Invalid color value ${color}.`);
    } catch (e) {
        throw e;
    }
}


const roundAlpha = (value: number | string): number => {
    const v = Math.round(Number(value) * 100) / 100;
    if (v > 1)
        return 1;
    if (v < 0)
        return 0;
    return v;
}


const normalizeAlpha = (alphaValue: number | string) => {
    return alphaValue > 1 ? 1 : alphaValue < 0 ? 0 : alphaValue;
}

const roundChannel = (value: number | string): number => {
    const v = Math.round(Number(value));
    if (v > 255)
        return 255;
    if (v < 0)
        return 0;
    return v;
}

const stringifyRgb = (r: number | string, g: number | string, b: number | string): string => {
    return `rgb(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)})`;
}

const stringifyRgba = (r: number | string, g: number | string, b: number | string, a: number | string): string => {
    return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${normalizeAlpha(a)})`;
}
const compositeChannel = (v1: number, a1: number, v2: number, a2: number, a: number) => {
    return roundChannel((v1 * a1 * (1 - a2) + v2 * a2) / a);
}

/**
 * 将两种颜色合并到一起
 * 
 * @param background 
 * @param overlay 
 * @returns 
 */
export const colorsMix = (background: string | RGB | RGBA, overlay: string | RGB | RGBA): string => {
    if (!Array.isArray(background))
        background = rgba(background);
    if (!Array.isArray(overlay))
        overlay = rgba(overlay);
    const a1 = background[3] as number;
    const a2 = overlay[3] as number;
    const alpha = roundAlpha(a1 + a2 - a1 * a2);
    return stringifyRgba(compositeChannel(background[0], a1, overlay[0], a2, alpha), compositeChannel(background[1], a1, overlay[1], a2, alpha), compositeChannel(background[2], a1, overlay[2], a2, alpha), alpha);
}

/**
 * 转RGB
 * 
 * @param base 
 * @returns 
 */
const toRgbString = (base: string | RGB | RGBA) => {
    const [r, g, b] = Array.isArray(base) ? base : rgba(base);
    return stringifyRgb(r, g, b);
}

/**
 * 转RGBA
 * 
 * @param base 
 * @returns 
 */
const toRgbaString = (base: RGBA | RGB) => {
    const [r, g, b] = base;
    if (3 in base) {
        return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, ${roundAlpha((base as RGBA)[3])})`;
    }
    return `rgba(${roundChannel(r)}, ${roundChannel(g)}, ${roundChannel(b)}, 1)`;
}

/**
 * 转 # + 8位
 * 
 * @param base 
 * @returns 
 */
const toHexaString = (base: RGBA | RGB | string) => {
    if (typeof base === 'string') {
        let i;
        if (i = hexRegex.exec(base)) {
            return `${i[0]}FF`;
        }
        else if (i = hexaRegex.exec(base)) {
            return i[0];
        }
        else if (i = sHexRegex.exec(base)) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}FF`;
        }
        else if (i = sHexaRegex.exec(base)) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}${i[4]}${i[4]}`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
    }
    const hex = `#${base
        .slice(0, 3)
        .map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, '0'))
        .join('')}`;
    const a = base.length === 3
        ? 'FF'
        : roundChannel(base[3] * 255)
            .toString(16)
            .padStart(2, '0')
            .toUpperCase();
    return hex + a;
}

/**
 * 转 # + 6位
 * 
 * @param base 
 * @returns 
 */
const toHexString = (base: RGBA | RGB | string) => {
    if (typeof base === 'string') {
        let i;
        if (i = hexRegex.exec(base)) {
            return i[0];
        }
        else if (i = hexaRegex.exec(base)) {
            return i[0].slice(0, 7);
        }
        else if (i = (sHexRegex.exec(base) || sHexaRegex.exec(base))) {
            return `#${i[1]}${i[1]}${i[2]}${i[2]}${i[3]}${i[3]}`;
        }
        throw new Error(`[seemly/toHexString]: Invalid hex value ${base}.`);
    }
    return `#${base
        .slice(0, 3)
        .map((unit) => roundChannel(unit).toString(16).toUpperCase().padStart(2, '0'))
        .join('')}`;
}