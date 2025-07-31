const { defineConfig } = require("cypress");

const browserify = require("@cypress/browserify-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprendTransformerToOptions,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify(preprendTransformerToOptions(config, browserify.defaultOptions)),
  );
  // require('cypress-mochawesome-reporter/plugin')(on); // for reports
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/ui_tests_BDD/*.feature',
    setupNodeEvents
  },
  watchForFileChanges: false, //disable auto rerun
  video: true, // enable video capture of test execution
  retries: {
    // Configure retry attempts for `cypress run`
    // Default is 0
    runMode: 1,
    // Configure retry attempts for `cypress open`
    // Default is 0
    openMode: 0,
  },
  env: {
    url: "https://www.saucedemo.com/"
  },
});
