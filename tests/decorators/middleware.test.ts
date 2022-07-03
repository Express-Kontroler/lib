import { Middleware, PreMiddleware, PostMiddleware, MIDDLEWARE_METADATA } from "../../src";
import { describe, test, expect } from "vitest";
import "reflect-metadata";

describe("Middleware", () => {
	test("metadata for non-decorated middleware method should RETURN undefined", () => {
		class SampleController {
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const middlewareMetadata = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toBe(undefined);
	});

	test("metadata for decorated middleware method should RETURN defaults", () => {
		class SampleController {
			@Middleware(() => {
				return "Test";
			})
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toStrictEqual({ fn: expect.any(Function), order: "pre" });
	});

	test("metadata for decorated middleware with pre order method should RETURN pre order", () => {
		class SampleController {
			@Middleware(
				() => {
					return "Test";
				},
				{
					order: "pre",
				},
			)
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toStrictEqual({ fn: expect.any(Function), order: "pre" });
	});

	test("metadata for decorated middleware with post order method should RETURN post order", () => {
		class SampleController {
			@Middleware(
				() => {
					return "Test";
				},
				{
					order: "post",
				},
			)
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toStrictEqual({ fn: expect.any(Function), order: "post" });
	});

	test("metadata fn for decorated middleware should RETURN given string when called", () => {
		class SampleController {
			@Middleware(() => {
				return "Test";
			})
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);
		const result = middlewareMetadata.fn();

		expect(result).toBe("Test");
	});

	test("metadata for decorated middleware with pre method should RETURN pre order", () => {
		class SampleController {
			@PreMiddleware(() => {
				return "Test";
			})
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toStrictEqual({ fn: expect.any(Function), order: "pre" });
	});

	test("metadata for decorated middleware with post method should RETURN post order", () => {
		class SampleController {
			@PostMiddleware(() => {
				return "Test";
			})
			public sampleRoute(): void {}
		}

		const controller = new SampleController();

		const [middlewareMetadata] = Reflect.getMetadata(MIDDLEWARE_METADATA, controller.sampleRoute);

		expect(middlewareMetadata).toStrictEqual({ fn: expect.any(Function), order: "post" });
	});
});
