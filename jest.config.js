module.exports = {
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node", "scss", "sass"],
  transform: {
    "^.+\\.ts(x)?$": "ts-jest"
  },
  testMatch: ["**/*.(test|spec).(ts|tsx)"],
  globals: {
    "ts-jest": {
      babelConfig: true,
      tsConfig: "jest.tsconfig.json",
      diagnostics: true
    }
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  coveragePathIgnorePatterns: ["/node_modules/", "enzyme.js"],
  setupFilesAfterEnv: ["<rootDir>/enzyme.js"],
  coverageReporters: ["json", "lcov", "text", "text-summary"],
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/mocks.js",
    "\\.(css|less|scss)$": "<rootDir>/__mocks__/mocks.js",
    "src/(.*)": "<rootDir>/src/$1",
    "pages/(.*)": "<rootDir>/pages/$1"
  }
}