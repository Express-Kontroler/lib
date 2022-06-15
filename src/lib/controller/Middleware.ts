import { MIDDLEWARE_METADATA, MIDDLEWARE_ORDER_METADATA, MIDDLEWARE_FN_METADATA } from "../constants";
import type { NextFunction, Request, Response } from "express";

/**
 * A decorator that adds middleware metadata to a controller method
 * @param fn
 * @param options
 */
export const Middleware = (fn: MiddlewareFn, options: Partial<MiddlewareOptions> = {}): PropertyDecorator => {
	if (!options?.order) options.order = "pre";

	const orders = [options.order];
	const fns = [fn];

	return (target: object) => {
		const middleware: boolean = Reflect.getMetadata(MIDDLEWARE_METADATA, target);

		if (middleware) {
			orders.push(...Reflect.getMetadata(MIDDLEWARE_ORDER_METADATA, target));
			fns.push(...Reflect.getMetadata(MIDDLEWARE_FN_METADATA, target));
		} else Reflect.defineMetadata(MIDDLEWARE_METADATA, true, target);

		Reflect.defineMetadata(MIDDLEWARE_ORDER_METADATA, orders, target);
		Reflect.defineMetadata(MIDDLEWARE_FN_METADATA, fns, target);
	};
};

export interface MiddlewareOptions {
	/**
	 * The order determines the middleware execution.
	 */
	order?: "pre" | "post";
}

export type MiddlewareFn = (req: Request, res: Response, next: NextFunction) => void;
