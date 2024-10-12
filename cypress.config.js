const { defineConfig } = require("cypress");
const { allureCypress } = require("allure-cypress/reporter");
const fs = require('fs');
const path = require('path');

module.exports = defineConfig({
  projectId: 'jptmpi',
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/results',
    overwrite: false,
    html: true,
    json: true,
  },

  e2e: {
    setupNodeEvents(on, config) {
      allureCypress(on, {
        resultsDir: "./cypress/allure-results",
      });

      // Add custom task to find downloaded file
      on('task', {
        findDownloadedFile(fileExtension) {
          const downloadsFolder = path.join(__dirname, 'cypress', 'downloads');
          const files = fs.readdirSync(downloadsFolder);
          // Find files that end with the given extension
          return files.find((file) => file.endsWith(fileExtension)) || null;
        }
      });

      return config;
    },
    trashAssetsBeforeRuns: false,
    testIsolation: false,
    experimentalRunAllSpecs: true,
    viewportHeight: 1400,
    viewportWidth: 1600,
    video: true,
    videoCompression: false,
    defaultCommandTimeout: 30000
  },
});
