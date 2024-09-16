const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    video: true,
    env: {
      commandDelay: false,
    },
    setupNodeEvents(on, config) {
    },
    testIsolation: false,
    viewportWidth: 1280, 
    viewportHeight: 720,
  },
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  chromeWebSecurity:false
});
