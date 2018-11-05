const path = require('path');
const os = require('os');
const fs = require('fs');

const symlinkType = os.platform() === 'win32' ? 'junction' : 'dir';

const repoPath = path.resolve(__dirname, '..');
const extensionspath = path.resolve(os.homedir(), '.vscode', 'extensions');
const disabledPath = path.join(extensionspath, 'disabled');
const bootstrapedDarkPath = path.join(extensionspath, 'ryuukibeat.test.dark-party');

const commands = {
  attach() {
    if (fs.existsSync(disabledPath)) {
      return;
    }
    const darkDir = fs.readdirSync(extensionspath).find((extension) => extension.match(/^ryuukibeat.test.dark-party/));
    const darkPath = path.join(extensionspath, darkDir);
    if (!fs.existsSync(disabledPath)) {
      fs.mkdirSync(disabledPath);
    }

    fs.renameSync(darkPath, path.join(disabledPath, darkDir));
    fs.symlinkSync(repoPath, bootstrapedDarkPath, symlinkType);
  },
  eject() {
    if (fs.existsSync(bootstrapedDarkPath)) {
      fs.unlinkSync(bootstrapedDarkPath);
    }
    if (fs.existsSync(disabledPath)) {
      const darkDir = fs.readdirSync(disabledPath).find((extension) => extension.match(/^ryuukibeat.test.dark-party/));
      const darkPath = path.join(disabledPath, darkDir);

      fs.renameSync(darkPath, path.join(extensionspath, darkDir));
      fs.rmdirSync(disabledPath);
    }
  }
};

const [ , , command ] = process.argv;

commands[command]();
