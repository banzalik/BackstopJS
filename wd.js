const { remote } = require('webdriverio');

(async () => {
  const browser = await remote({
    logLevel: 'debug',
    capabilities: {
      browserName: 'firefox'
    },
    services: ['browserstack'],
    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    browserstackLocal: true
  });

  await browser.url('https://webdriver.io')

  const title = await browser.getTitle()
  console.log('Title was: ' + title)

  await browser.deleteSession()
})().catch((e) => console.error(e))
