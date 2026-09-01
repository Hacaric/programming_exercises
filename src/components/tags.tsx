import type { ActivityTag } from "generated/prisma";
import { Tag } from "./tag";

export function Tags(props: { tags: ActivityTag[] }) {
    return props.tags.map((tag) => <Tag tag={tag} key={tag.name} />);
}
