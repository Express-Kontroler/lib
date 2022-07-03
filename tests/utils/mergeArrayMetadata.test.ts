import { describe, test, expect } from "vitest";
import { Utils } from "../../src";
import "reflect-metadata";

describe("Utils#mergeArrayMetadata", () => {
	test("GIVEN empty array input should RETURN an empty array", () => {
		class Sample {}

		const result = Utils.mergeArrayMetadata("test", [], Sample);

		expect(result).toStrictEqual([]);
	});

	test("GIVEN array input should RETURN an array of metadata contents", () => {
		class Sample {}

		const result = Utils.mergeArrayMetadata("test", ["sample1"], Sample);

		expect(result).toStrictEqual(["sample1"]);
	});

	test("GIVEN array input should RETURN an array of metadata contents when metadata already exists", () => {
		class Sample {}

		Reflect.defineMetadata("test", ["sample1"], Sample);

		const result = Utils.mergeArrayMetadata("test", ["sample2"], Sample);

		expect(result).toStrictEqual(["sample1", "sample2"]);
	});
});
