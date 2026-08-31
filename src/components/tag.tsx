import type { ActivityTag } from "generated/prisma";

export function Tag({ tag }: { tag: ActivityTag }) {
    return (
        <div
            style={{
                background: `rgb(from ${tag.tagColor} r g b / 0.3)`,
                borderColor: tag.tagColor,
            }}
            className="rounded-md border-2 px-1"
        >
            {tag.name}
        </div>
    );
}
