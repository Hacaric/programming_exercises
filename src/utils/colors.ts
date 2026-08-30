export interface Color {
    red: number;
    green: number;
    blue: number;
    opacity?: number;
}

export function colorFromHexString(color: string) {
    const hexRegex = /^#?([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i;
    if (!hexRegex.test(color)) {
        return null;
    }
    if (color.length == 7) {
        return {
            red: Number(`0x${color.substring(1, 3)}`),
            green: Number(`0x${color.substring(3, 5)}`),
            blue: Number(`0x${color.substring(5, 7)}`),
        };
    } else if (color.length == 4) {
        return {
            red: Number(`0x${color.substring(1, 2)}`),
            green: Number(`0x${color.substring(2, 3)}`),
            blue: Number(`0x${color.substring(3, 4)}`),
        };
    } else if (color.length == 9) {
        const output = {
            red: Number(`0x${color.substring(1, 3)}`),
            green: Number(`0x${color.substring(3, 5)}`),
            blue: Number(`0x${color.substring(5, 7)}`),
            opacity: Number(`0x${color.substring(7, 9)}`),
        };

        return output;
    }
    console.error(
        `Not implemented (blame this on devs, especially Hacaric): cannot determine rgb value of '${color}'`,
    );
    return null;
}

export function getTextColorBasedOnBacgroundColor(
    backgroundColor: Color | string,
) {
    const color = calculate_RGB_from_RGBA_on_white_background(backgroundColor);
    if (!color) {
        console.warn(
            `getTextColorBasedOnBacgroundColor(): Invalid color: ${backgroundColor}`,
        );
        return null;
    }
    // console.debug(`BG COLOR: ${backgroundColor}; returning ${(color.red*0.299 + color.green*0.587 + color.blue*0.114) > 186 ? '#000000' : '#ffffff'}`)
    // Source: https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
    // return (color.red*0.299 + color.green*0.587 + color.blue*0.114) > 186 ? '#000000' : '#ffffff';
    return color.red * 0.299 + color.green * 0.587 + color.blue * 0.114 > 186
        ? "#000000"
        : "#ffffff";
}

export function calculate_RGB_from_RGBA_on_white_background(
    color: string | Color,
): Color | null {
    if (typeof color == "string") {
        const color_ = colorFromHexString(color);
        if (!color_) {
            return null;
        }
        color = color_;
    }

    if (!color.opacity) {
        return color;
    }
    const result = {
        red: 255 - (color.opacity / 255) * (255 - color.red),
        green: 255 - (color.opacity / 255) * (255 - color.green),
        blue: 255 - (color.opacity / 255) * (255 - color.blue),
    };
    return result;
}
