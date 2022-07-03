import { Get, Post, Patch, Put, Delete, All, ROUTE_METADATA } from "../../src";
import { describe, test, expect } from "vitest";
import "reflect-metadata";

describe("Route", () => {
	describe("Get", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@Get()
				public sampleRoute(): void {}
			}

			const controller = new SampleController();

			const route = Reflect.getMetadata(ROUTE_METADATA, controller.sampleRoute);

			expect(route).toStrictEqual({ method: "GET", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@Get("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "GET", path: ["/sample"] });
		});
	});

	describe("Post", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@Post()
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "POST", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@Post("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "POST", path: ["/sample"] });
		});
	});

	describe("Patch", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@Patch()
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "PATCH", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@Patch("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "PATCH", path: ["/sample"] });
		});
	});

	describe("Put", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@Put()
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "PUT", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@Put("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "PUT", path: ["/sample"] });
		});
	});

	describe("Delete", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@Delete()
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "DELETE", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@Delete("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "DELETE", path: ["/sample"] });
		});
	});

	describe("All", () => {
		test("metadata for non-decorated route method should RETURN undefined", () => {
			class SampleController {
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toBe(undefined);
		});

		test("metadata for decorated route method should RETURN defaults", () => {
			class SampleController {
				@All()
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "ALL", path: ["/"] });
		});

		test("metadata for decorated route method with specified path should RETURN path", () => {
			class SampleController {
				@All("/sample")
				public static sampleRoute(): void {}
			}

			const route = Reflect.getMetadata(ROUTE_METADATA, SampleController.sampleRoute);

			expect(route).toStrictEqual({ method: "ALL", path: ["/sample"] });
		});
	});
});
