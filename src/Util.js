const config = require('config');
const fs = require('fs');
const https = require('https');
const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');

class Util {
  constructor() {
    this.db = low(adapter);
  }

  avatarExists() {
    return fs.existsSync('./config/avatar.png');
  }

  getListOfCommands() {
    return [
      '```',
      `Use the prefix "${config.get('prefix')}" with the following commands:`,
      '',
      'commands              Show this message',
      '```'
    ].join('\n');
  }
}

module.exports = new Util();