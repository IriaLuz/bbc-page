module.exports = {
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>", "<rootDir>/src/"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^@components": "<rootDir>/src/components",
    "^@types": ["src/types"],
    "^@styles/(.*)": ["src/styles/$1"],
  },
  modulePathIgnorePatterns: ["<rootDir>/src/stories", "<rootDir>/src/mocks"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/pages/_app.page.tsx",
    ".*stories.tsx",
    ".*__snapshots__/.*",
  ],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
};
