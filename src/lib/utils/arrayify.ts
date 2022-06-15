/**
 * Converts value to an array.
 * @param value The value to convert to an array
 */
export const arrayify = <T = unknown>(value: T | T[]): T[] => {
	return Array.isArray(value) ? value : [value];
};
