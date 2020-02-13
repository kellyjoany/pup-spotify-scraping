/* eslint-disable no-undef */
import puppeteer from 'puppeteer';
import log from '../models/Log.json';

require('dotenv/config');

class PuppeteerController {
  async getTest() {
    const {
      USERNAME,
      PASSWORD,
      MAIN_URL,
      URL_LOGIN,
      BACKGROUND_NAVIGATION,
    } = process.env;

    const browser = await puppeteer.launch({ headless: BACKGROUND_NAVIGATION });
    const page = await browser.newPage();
    try {
      await page.goto(`${MAIN_URL}`);
      const info = await page.evaluate(() => {
        return {
          title: document.title,
        };
      });
      console.log(info);
      log.push('1 - Browser opened and went to the main page');
    } catch (e) {
      return e;
    }

    try {
      await page.goto(`${URL_LOGIN}`);
      await page.pdf({
        path: 'spotify_login.pdf',
        format: 'A4',
      });
      log.push('2 - Browser redirect to login page and printed the page');
    } catch (e) {
      return e;
    }

    try {
      await page.type('#login-username', USERNAME);
      await page.type('#login-password', PASSWORD);
      await Promise.all([
        page.waitForNavigation(),
        page.click('#login-button'),
      ]);
      await page.pdf({
        path: 'spotify_logged.pdf',
        format: 'A4',
      });
      log.push(
        '3 - Browser perform the login with success and printed the page'
      );
    } catch (e) {
      return e;
    }

    try {
      await page.goto(`${MAIN_URL}/account/subscription/receipt/`);
      await page.pdf({
        path: 'spotify_receipts.pdf',
        format: 'A4',
      });
      log.push(
        '4 - Browser redirect to the receipts page and printed the page'
      );
    } catch (e) {
      return e;
    }

    try {
      await page.waitFor(3000);

      const result = await page.evaluate(() => {
        const columnsTitle = [];
        const columnsChildren = [];

        document
          .querySelector('table[id^=table-receipts] thead > tr')
          .querySelectorAll('th')
          .forEach(column => {
            columnsTitle.push(column.innerText);
          });

        document
          .querySelectorAll('table[id^=table-receipts] tbody tr')
          .forEach(e => {
            const newObject = {};

            e.querySelectorAll('td').forEach((value, index) => {
              newObject[columnsTitle[index]] = value.innerText;
            });

            columnsChildren.push(newObject);
          });

        return columnsChildren;
      });

      await browser.close();

      log.push(
        '5 - All the receipts are printed and the steps are saved in json file'
      );
      log.push(result);
      console.log(log);
    } catch (e) {
      return e;
    }
    return log;
  }
}

export default new PuppeteerController();
