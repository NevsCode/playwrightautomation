// @ts-check
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  timeout: 40000,   // 50 seconds
  expect: {
    timeout: 5000,   //30 seconds
  },
  reporter: 'html',  //get report
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    browserName: 'chromium',   // browser
    baseURL: 'https://rahulshettyacademy.com', //
    trace: 'on',
    screenshot: 'on',
    video: 'on',
  },

});

