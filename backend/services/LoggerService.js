const fs = require('fs');
const path = require('path');

class LoggerService {
  constructor(filename = 'log.txt') {
    this.logPath = path.join(__dirname, '..', '..', filename);
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const fullMessage = `[${timestamp}] ${message}\n`;

    fs.appendFile(this.logPath, fullMessage, (err) => {
      if (err) {
        console.error('Erro ao gravar no log:', err);
      }
    });
  }
}

module.exports = new LoggerService();
