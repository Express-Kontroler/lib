export const mergeArrayMetadata = <T extends unknown[]>(key: string, metadata: T, target: object) => {
	const currentValue = Reflect.getMetadata(key, target) || [];
	const value = [...currentValue, ...metadata];
	Reflect.defineMetadata(key, value, target);
};
