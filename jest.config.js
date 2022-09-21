module.exports = {
  roots: ["<rootDir>"],
  modulePaths: ["<rootDir>", "<rootDir>/src/"],
  moduleDirectories: ["node_modules", "src"],
  setupFilesAfterEnv: ["./jest.setup.js"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "babel-jest",
    "^@components": "<rootDir>/src/components",
    "^@pages": ["/src/pages"],
    "^@types": ["src/types"],
    "^@styles/(.*)": ["src/styles/$1"],
  },
  modulePathIgnorePatterns: ["<rootDir>/src/stories", "<rootDir>/src/mocks"],
  coveragePathIgnorePatterns: [
    "<rootDir>/src/pages/_app.tsx",
    ".*stories.tsx",
    ".*__snapshots__/.*",
  ],
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
};
