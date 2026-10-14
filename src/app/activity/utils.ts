export function parseTagFilters(
    tag_filters_raw: string | string[] | null,
): string[] | null {
    if (!tag_filters_raw) {
        return null;
    }
    console.log(
        `Called parseTagFilters(${Array.isArray(tag_filters_raw) ? "Array: " + JSON.stringify(tag_filters_raw) : "String: " + tag_filters_raw})`,
    );
    let tag_filters_parsed;
    if (Array.isArray(tag_filters_raw)) {
        tag_filters_parsed = tag_filters_raw;
    } else {
        tag_filters_parsed = [tag_filters_raw];
    }

    if (!Array.isArray(tag_filters_parsed)) {
        console.error(`Invalid search filter, ignoring: is not array`);
        return null;
    }

    let isValid = tag_filters_parsed.every((e) => typeof e == "string");
    console.log(
        `Done parsing Tag Filters: ${isValid ? "Success" : "Failed (One or more items are not strings)"}`,
    );
    if (!isValid) {
        return null;
    }
    console.log(`Returning: ${JSON.stringify(tag_filters_parsed)}`);
    return tag_filters_parsed;
}
