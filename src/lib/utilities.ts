/**
 * Converts value to an array.
 * @param value The value to convert to an array
 *
 */
export const arrayify = (value: unknown) => (Array.isArray(value) ? value : [value]);
