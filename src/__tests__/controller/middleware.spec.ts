import { MIDDLEWARE_METADATA, MIDDLEWARE_ORDER_METADATA, MIDDLEWARE_FN_METADATA } from "../../lib/constants";
import { Middleware } from "../../lib/controller/Middleware";
import "reflect-metadata";

const getMiddlewareMetadata = (target: object) => {
	return {
		isMiddleware: Reflect.getMetadata(MIDDLEWARE_METADATA, target),
		order: Reflect.getMetadata(MIDDLEWARE_ORDER_METADATA, target),
		fn: Reflect.getMetadata(MIDDLEWARE_FN_METADATA, target),
	};
};

describe("middleware", () => {
	test("middleware with no middleware metadata should be undefined", () => {
		class TestController {
			public testRoute() {
				// noop
			}
		}

		const { isMiddleware } = getMiddlewareMetadata(TestController.prototype);

		expect(isMiddleware).toBe(undefined);
	});

	test("middleware with no options should use default metadata", () => {
		class TestController {
			@Middleware(() => {
				// noop
			})
			public testRoute() {
				// noop
			}
		}

		const { isMiddleware, order, fn } = getMiddlewareMetadata(TestController.prototype);

		expect(isMiddleware).toBe(true);
		expect(order).toStrictEqual(["pre"]);
		expect(fn.map((fn: unknown) => typeof fn)).toStrictEqual(["function"]);
	});

	test("middleware with all options should use no default metadata", () => {
		class TestController {
			@Middleware(
				() => {
					// noop
				},
				{ order: "post" },
			)
			public testRoute() {
				// noop
			}
		}

		const { isMiddleware, order, fn } = getMiddlewareMetadata(TestController.prototype);

		expect(isMiddleware).toBe(true);
		expect(order).toStrictEqual(["post"]);
		expect(fn.map((fn: unknown) => typeof fn)).toStrictEqual(["function"]);
	});
});
