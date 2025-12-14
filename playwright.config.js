const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  retries: 1,
  reporter: [
    ['list'],
    ['html', { open: 'always' }]
  ],
  workers: 4,
  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure'
  },
  projects: [
    {
      name: 'UI - Chromium',
      testDir: 'tests/ui',
      use: {
        baseURL: 'https://the-internet.herokuapp.com',
        browserName: 'chromium'
      },
    },
    {
      name: 'UI - Firefox',
      testDir: 'tests/ui',
      use: {
        baseURL: 'https://the-internet.herokuapp.com',
        browserName: 'firefox'
      },
    },
    {
      name: 'UI - WebKit',
      testDir: 'tests/ui',
      use: {
        baseURL: 'https://the-internet.herokuapp.com',
        browserName: 'webkit'
      },
    },
    {
      name: 'API',
      testDir: 'tests/api',
      use: {
        baseURL: 'https://jsonplaceholder.typicode.com'
      },
    }
  ]
});
