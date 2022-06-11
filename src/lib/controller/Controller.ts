import { CONTROLLER_METADATA, CONTROLLER_PREFIX_METADATA, CONTROLLER_VERSION_METADATA } from "../constants";

/**
 * A decorator that adds controller metadata to a class
 * @param options The options to apply to the controller
 */
export const Controller = (options: Partial<ControllerOptions> = {}): ClassDecorator => {
	if (!options?.prefix) options.prefix = "/";
	if (!options?.version) options.version = "v1";

	const prefix = Array.isArray(options.prefix) ? options.prefix : [options.prefix];
	const version = Array.isArray(options.version) ? options.version : [options.version];

	return (target: object) => {
		Reflect.defineMetadata(CONTROLLER_METADATA, true, target);
		Reflect.defineMetadata(CONTROLLER_PREFIX_METADATA, prefix, target);
		Reflect.defineMetadata(CONTROLLER_VERSION_METADATA, version, target);
	};
};

export interface ControllerOptions {
	/**
	 * The router prefix for the controller. Controller routes will append the prefix
	 */
	prefix: RoutePath[] | RoutePath;

	/**
	 * The versions accepted by the controller. Per-route versions can override controller versions
	 */
	version: ControllerVersion[] | ControllerVersion;
}

export type RoutePath = `/${string}`;

export type ControllerVersion =
	| `v${ControllerVersionValue}`
	| `${ControllerVersionValue}`
	| ControllerVersionValue;

export type ControllerVersionValue = number | `${number}.${number}`;
