import { CONTROLLER_METADATA } from "../constants";
import { arrayify } from "../utils/arrayify";

/**
 * A decorator that adds controller metadata to a class
 * @param options The options to apply to the controller
 */
export const Controller = (options: Partial<ControllerOptions> = {}): ClassDecorator => {
	if (!options?.prefix) options.prefix = "/";
	if (!options?.version) options.version = "v1";

	const prefix = arrayify(options.prefix);
	const version = arrayify(options.version);

	return (target: object) => {
		Reflect.defineMetadata(CONTROLLER_METADATA, { prefix, version }, target);
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
