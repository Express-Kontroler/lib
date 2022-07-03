import { Controller, CONTROLLER_METADATA } from "../../src";
import { describe, test, expect } from "vitest";
import "reflect-metadata";

describe("Controller", () => {
	test("metadata for non-decorated controller class should RETURN undefined", () => {
		class SampleController {}

		const controllerMetadata = Reflect.getMetadata(CONTROLLER_METADATA, SampleController);

		expect(controllerMetadata).toBe(undefined);
	});

	test("metadata for decorated controller class should RETURN defaults", () => {
		@Controller()
		class SampleController {}

		const controllerMetadata = Reflect.getMetadata(CONTROLLER_METADATA, SampleController);

		expect(controllerMetadata).toStrictEqual({ prefix: ["/"], version: ["v1"] });
	});

	test("metadata for decorated controller class with specified prefix should RETURN prefix and defaults", () => {
		@Controller({
			prefix: "/sample",
		})
		class SampleController {}

		const controllerMetadata = Reflect.getMetadata(CONTROLLER_METADATA, SampleController);

		expect(controllerMetadata).toStrictEqual({ prefix: ["/sample"], version: ["v1"] });
	});

	test("metadata for decorated controller class with specified version should RETURN version and defaults", () => {
		@Controller({
			version: 2,
		})
		class SampleController {}

		const controllerMetadata = Reflect.getMetadata(CONTROLLER_METADATA, SampleController);

		expect(controllerMetadata).toStrictEqual({ prefix: ["/"], version: [2] });
	});
});
