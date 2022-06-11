import { CONTROLLER_ROUTE_METHOD_METADATA, CONTROLLER_ROUTE_PATH_METADATA } from "../../constants";
import type { RoutePath } from "../Controller";

/**
 * A decorator that adds route metadata to a class method
 * @param options The route options
 */
export const makeMethodRouteDecorator = (options: RouteOptions): MethodDecorator => {
	if (!options.path) options.path = "/";

	const method = options.method;
	const path = Array.isArray(options.path) ? options.path : [options.path];

	return (target: object) => {
		Reflect.defineMetadata(CONTROLLER_ROUTE_METHOD_METADATA, method, target);
		Reflect.defineMetadata(CONTROLLER_ROUTE_PATH_METADATA, path, target);
	};
};

/**
 * Wraps the decorator for easier use
 * @param method The HTTP method
 */
export const makeRouteDecorator = (method: RouteMethod) => (path?: RoutePath[] | RoutePath) => {
	return makeMethodRouteDecorator({ method, path });
};

/**
 * Apply the HTTP GET method to a path
 */
export const Get = makeRouteDecorator("GET");

/**
 * Apply the HTTP POST method to a path
 */
export const Post = makeRouteDecorator("POST");

/**
 * Apply the HTTP PATCH method to a path
 */
export const Patch = makeRouteDecorator("PATCH");

/**
 * Apply the HTTP PUT method to a path
 */
export const Put = makeRouteDecorator("PUT");

/**
 * Apply the HTTP DELETE method to a path
 */
export const Delete = makeRouteDecorator("DELETE");

/**
 * Apply all methods to a path
 */
export const All = makeRouteDecorator("ALL");

export interface RouteOptions {
	/**
	 * The HTTP method
	 */
	method: RouteMethod;

	/**
	 * The route path
	 */
	path?: RoutePath[] | RoutePath;
}

export type RouteMethod = "GET" | "POST" | "PATCH" | "PUT" | "DELETE" | "ALL";
export type MethodDecoratorWrapper = () => MethodDecorator;
