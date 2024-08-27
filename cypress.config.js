const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    env: {
      commandDelay: false,
    },
    setupNodeEvents(on, config) {
    },
    chromeWebSecurity: false,
    viewportWidth: 1280, 
    viewportHeight: 720 
  },
  defaultCommandTimeout: 10000,
});