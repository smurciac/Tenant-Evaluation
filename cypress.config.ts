import { defineConfig } from 'cypress';
import * as dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  e2e: {
    baseUrl: 'http://uitestingplayground.com/sampleapp',
    defaultBrowser: 'chrome',
    video: true,
    showLastNCommandsLogOnly: 0,
    setupNodeEvents(on, config) {
      return config;
    }
  },
  env: {
    testEnvironment: 'testing',
    password: 'pwd',
    browserPermissions: {
      clipboard: 'allow'
    }
  }
});
