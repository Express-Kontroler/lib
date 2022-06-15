/**
 * Converts value to an array.
 * @param value The value to convert to an array
 *
 */
export const arrayfy = (value: unknown) => (Array.isArray(value) ? value : [value]);
