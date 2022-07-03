import { describe, test, expect } from "vitest";
import { Utils } from "../../src";

describe("Utils#arrayify", () => {
	test("GIVEN array input should RETURN an array", () => {
		const input = ["sample1", "sample2", "sample3"];
		const result = Utils.arrayify(input);

		expect(result).toStrictEqual(["sample1", "sample2", "sample3"]);
	});

	test("GIVEN primitive input should RETURN an array", () => {
		const input = "sample1";
		const result = Utils.arrayify(input);

		expect(result).toStrictEqual(["sample1"]);
	});

	test("GIVEN object input should RETURN an array", () => {
		const input = { sample: 1 };
		const result = Utils.arrayify(input);

		expect(result).toStrictEqual([{ sample: 1 }]);
	});
});
