/* eslint-env jasmine */

const path = require('path');
const reporters = require('jasmine-reporters');

const reporter = new reporters.JUnitXmlReporter({
  // Jest runs many instances of Jasmine in parallel. Force distinct file output
  // per test to avoid collisions.
  consolidateAll: false,
  filePrefix: 'jest-junit-result-',
  savePath: path.join(__dirname, '/../build/reports/'),
});

jasmine.getEnv().addReporter(reporter);
