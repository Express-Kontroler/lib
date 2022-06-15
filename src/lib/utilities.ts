/**
 * Converts value to an array.
 * @param value The value to convert to an array
 *
 */
export const arraify = (value: unknown) => (Array.isArray(value) ? value : [value]);
