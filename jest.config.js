module.exports = {
  transform: {
    '^.+\\.jsx?$': `<rootDir>/test-config/jest-preprocess.js`
  },
  moduleNameMapper: {
    '.+\\.(css|styl|less|sass|scss)$': `identity-obj-proxy`,
    '.+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': `<rootDir>/test-config/__mocks__/fileMock.js`
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``
  },
  testURL: `http://localhost`,
  setupFilesAfterEnv: [`<rootDir>/test-config/jest.setup.js`],
  setupFiles: [`<rootDir>/test-config/loadershim.js`]
};
