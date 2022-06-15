import {
	CONTROLLER_METADATA,
	CONTROLLER_PREFIX_METADATA,
	CONTROLLER_VERSION_METADATA,
} from "../../lib/constants";

import { Controller } from "../../lib/controller/Controller";
import "reflect-metadata";

const getControllerMetadata = (target: object) => {
	return {
		isController: Reflect.getMetadata(CONTROLLER_METADATA, target),
		prefix: Reflect.getMetadata(CONTROLLER_PREFIX_METADATA, target),
		version: Reflect.getMetadata(CONTROLLER_VERSION_METADATA, target),
	};
};

describe("controller", () => {
	test("controller with no controller metadata should be undefined", () => {
		class TestController {}

		const { isController } = getControllerMetadata(TestController);

		expect(isController).toBe(undefined);
	});

	test("controller with no options should use default metadata", () => {
		@Controller()
		class TestController {}

		const { isController, prefix, version } = getControllerMetadata(TestController);

		expect(isController).toBe(true);
		expect(prefix).toStrictEqual(["/"]);
		expect(version).toStrictEqual(["v1"]);
	});

	test("controller with only prefix option should use default version metadata", () => {
		@Controller({
			prefix: "/test",
		})
		class TestController {}

		const { isController, prefix, version } = getControllerMetadata(TestController);

		expect(isController).toBe(true);
		expect(prefix).toStrictEqual(["/test"]);
		expect(version).toStrictEqual(["v1"]);
	});

	test("controller with only version option should use default prefix metadata", () => {
		@Controller({
			version: "v2",
		})
		class TestController {}

		const { isController, prefix, version } = getControllerMetadata(TestController);

		expect(isController).toBe(true);
		expect(prefix).toStrictEqual(["/"]);
		expect(version).toStrictEqual(["v2"]);
	});

	test("controller with all options should use no default metadata", () => {
		@Controller({
			prefix: "/test",
			version: "v2",
		})
		class TestController {}

		const { isController, prefix, version } = getControllerMetadata(TestController);

		expect(isController).toBe(true);
		expect(prefix).toStrictEqual(["/test"]);
		expect(version).toStrictEqual(["v2"]);
	});
});
