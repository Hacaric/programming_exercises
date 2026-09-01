export function parseTagFilters(
    tag_filters_raw: string | null,
): string[] | null {
    if (!tag_filters_raw) {
        return null;
    }
    // console.log(`Called parseTagFilters('${tag_filters_raw}')`);
    let tag_filters_parsed;
    try {
        tag_filters_parsed = JSON.parse(tag_filters_raw);
    } catch {
        console.error(
            `Invalid search filter, ignoring: JSON failed to parse '${tag_filters_raw}'`,
        );
    }

    if (!Array.isArray(tag_filters_parsed)) {
        console.error(`Invalid search filter, ignoring: is not array`);
        return null;
    }

    let isValid = tag_filters_parsed.every((e) => typeof e == "string");
    console.log(
        `Done parsing Tag Filters: ${isValid ? "Success" : "Failed (Invalid structure)"}`,
    );
    if (!isValid) {
        return null;
    }
    return tag_filters_parsed;
}
