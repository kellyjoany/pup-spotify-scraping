/* eslint-disable func-names */
/* eslint-disable consistent-return */
import log from '../models/Log.json';
import pup from './PuppeteerController';

const fs = require('fs');

class LogController {
  async store(req, res) {
    const logResult = await pup.getTest();
    fs.writeFile(
      './src/app/models/Log.json',
      JSON.stringify(logResult),
      'utf8',
      function(err) {
        if (err) {
          return res.status(500).send({ message: err });
        }
        // console.log('The file was saved!');
      }
    );

    return res.status(201).json({ message: 'Success! The log file was saved' });
  }

  list(req, res) {
    try {
      return res.status(200).send(log);
    } catch (e) {
      return res.status(500).json({ message: 'Error' });
    }
  }
}

export default new LogController();
