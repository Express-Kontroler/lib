import type { NextFunction, Request, Response } from "express";
import { MIDDLEWARE_METADATA } from "../constants";
import { mergeArrayMetadata } from "../utils";

/**
 * A decorator that adds middleware metadata to a controller method
 * @param fn The middleware function
 * @param options The middleware options
 */
export const Middleware = (fn: MiddlewareFn, options: Partial<MiddlewareOptions> = {}): MethodDecorator => {
	if (!options?.order) options.order = "pre";

	return (_target: object, _key: string | symbol, descriptor: TypedPropertyDescriptor<any>) => {
		mergeArrayMetadata(MIDDLEWARE_METADATA, [{ order: options.order, fn }], descriptor.value);
	};
};

/**
 * A decorator that adds pre middleware metadata to a controller method
 * @param fn The middleware function
 */
export const PreMiddleware = (fn: MiddlewareFn): MethodDecorator => {
	return Middleware(fn, { order: "pre" });
};

/**
 * A decorator that adds post middleware metadata to a controller method
 * @param fn The middleware function
 */
export const PostMiddleware = (fn: MiddlewareFn): MethodDecorator => {
	return Middleware(fn, { order: "post" });
};

export interface MiddlewareOptions {
	/**
	 * The order determines the middleware execution
	 */
	order?: "pre" | "post";
}

export type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => Promise<unknown> | unknown;
