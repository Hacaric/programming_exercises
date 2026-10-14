import type { ActivityTag } from "generated/prisma";

export function Tag({
    tag,
    overwriteBorderColor,
    overwriteBackgroundColor,
    textColor,
    italicFont,
}: {
    tag: ActivityTag;
    overwriteBorderColor?: string;
    overwriteBackgroundColor?: string;
    textColor?: string;
    italicFont?: boolean;
}) {
    const borderColor = overwriteBorderColor ?? tag.tagColor;
    const backgroundColor =
        overwriteBackgroundColor ?? `rgb(from ${borderColor} r g b / 0.3)`;
    const textColor_ = textColor ?? "#000000";
    return (
        <div
            style={{
                background: backgroundColor,
                borderColor: borderColor,
                color: textColor_,
                fontStyle: italicFont ? "italic" : "normal",
            }}
            className="rounded-md border-2 px-1"
        >
            {tag.name}
        </div>
    );
}
