module.exports = {
	preset: "ts-jest",
	testEnvironment: "node",
	coverageDirectory: "coverage",
	collectCoverageFrom: ["<rootDir>/src/lib/**/*.ts"],
	testMatch: ["<rootDir>/src/__tests__/**/*.spec.ts"],
};
