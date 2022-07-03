import type { RoutePath } from "./Controller";
import { ROUTE_METADATA } from "../constants";

/**
 * A decorator that adds route metadata to a class method
 * @param options The route options
 */
export const makeMethodRouteDecorator = (options: RouteOptions): MethodDecorator => {
	if (!options.path) options.path = "/";

	const method = options.method;
	const path = Array.isArray(options.path) ? options.path : [options.path];

	return (_target: object, _key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
		Reflect.defineMetadata(ROUTE_METADATA, { method, path }, descriptor.value);
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
