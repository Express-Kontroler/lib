import { arrayify } from "../../lib/utils/arrayify";

describe("utils.arrayify", () => {
	test("given array value should return an array", () => {
		const value = ["sample1", "sample2", "sample3"];
		const result = arrayify(value);

		expect(result).toEqual(["sample1", "sample2", "sample3"]);
	});

	test("given primitive value should return an array", () => {
		const value = "sample1";
		const result = arrayify(value);

		expect(result).toStrictEqual(["sample1"]);
	});
});
