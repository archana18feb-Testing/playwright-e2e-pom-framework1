// @ts-check
import { defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';

const config = ({
  testDir: './tests',
  timeout: 50*1000,
  reporter: 'html',

  use: {
    browserName: 'chromium',
    headless: false,
    screenshot :'on',
    trace: 'on',//only failed test cases will be traced

  },

});
module.exports = config