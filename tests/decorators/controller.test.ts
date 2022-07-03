import {
	Controller,
	CONTROLLER_METADATA,
	CONTROLLER_PREFIX_METADATA,
	CONTROLLER_VERSION_METADATA,
} from "../../src";

import { describe, test, expect } from "vitest";
import "reflect-metadata";

const getControllerMetadata = (target: object) => {
	return {
		controller: Reflect.getMetadata(CONTROLLER_METADATA, target),
		controllerPrefix: Reflect.getMetadata(CONTROLLER_PREFIX_METADATA, target),
		controllerVersion: Reflect.getMetadata(CONTROLLER_VERSION_METADATA, target),
	};
};

describe("Controller", () => {
	test("metadata for non-decorated controller class should RETURN undefined", () => {
		class SampleController {}

		const { controller, controllerPrefix, controllerVersion } = getControllerMetadata(SampleController);

		expect(controller).toBe(undefined);
		expect(controllerPrefix).toBe(undefined);
		expect(controllerVersion).toBe(undefined);
	});

	test("metadata for decorated controller class should RETURN defaults", () => {
		@Controller()
		class SampleController {}

		const { controller, controllerPrefix, controllerVersion } = getControllerMetadata(SampleController);

		expect(controller).toBe(true);
		expect(controllerPrefix).toStrictEqual(["/"]);
		expect(controllerVersion).toStrictEqual(["v1"]);
	});

	test("metadata for decorated controller class with specified prefix should RETURN prefix and defaults", () => {
		@Controller({
			prefix: "/sample",
		})
		class SampleController {}

		const { controller, controllerPrefix, controllerVersion } = getControllerMetadata(SampleController);

		expect(controller).toBe(true);
		expect(controllerPrefix).toStrictEqual(["/sample"]);
		expect(controllerVersion).toStrictEqual(["v1"]);
	});

	test("metadata for decorated controller class with specified version should RETURN version and defaults", () => {
		@Controller({
			version: 2,
		})
		class SampleController {}

		const { controller, controllerPrefix, controllerVersion } = getControllerMetadata(SampleController);

		expect(controller).toBe(true);
		expect(controllerPrefix).toStrictEqual(["/"]);
		expect(controllerVersion).toStrictEqual([2]);
	});
});
