module.exports = {
    moduleFileExtensions: [
      "ts",
      "tsx",
      "js"
    ],
    transform: {
      //"^.+\\.tsx?$": "ts-jest"
    '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    //'^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    },
    testMatch: [
      "**/*.(test|spec).(js|ts|tsx)"
    ],
    globals: {
      /*"ts-jest": {
        useBabelrc: true,
        tsConfigFile: "jest.tsconfig.json"
      }*/
    },
    coveragePathIgnorePatterns: [
      "/node_modules/",
      "enzyme.js"
    ],
    setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
    coverageReporters: [
      "json",
      "lcov",
      "text",
      "text-summary"
    ],
    moduleNameMapper: {
      "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/mocks.js",
      "\\.(css|less|scss)$": "identity-obj-proxy"
    }
  };