#!/usr/bin/env node

import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';
import { parse } from 'yaml';

interface Aliases {
  [key: string]: string;
}

interface Config {
  'git-alias'?: Aliases;
}

const ALIAS_FILE_PATH = path.join(process.cwd(), 'byul-alias.yml');
const GIT_CONFIG_PATH = path.join(process.cwd(), '.git', 'config');
const BOX_WIDTH = 50;
const SUCCESS_COLOR = '\x1b[32m';
const ERROR_COLOR = '\x1b[31m';
const RESET_COLOR = '\x1b[0m';

const exitWithError = (message: string) => {
  console.error(message);
  process.exit(1);
};

if (!fs.existsSync(ALIAS_FILE_PATH)) {
  exitWithError(`${ALIAS_FILE_PATH} not found.`);
}

const fileContents = fs.readFileSync(ALIAS_FILE_PATH, 'utf8');
const config = parse(fileContents) as Config;

if (!config['git-alias']) {
  exitWithError('No git-alias defined in the "byul-alias.yml" file.');
}

const existingAliases = new Map<string, string>();
try {
  const output = execSync('git config --get-regexp "^alias\\."').toString();
  const lines = output.split('\n');
  for (const line of lines) {
    if (line) {
      const [aliasKey, aliasValue] = line.split(' ', 2);
      existingAliases.set(aliasKey.replace('alias.', ''), aliasValue);
    }
  }
} catch (error) {
  console.log('No existing git aliases found.');
}

const drawBox = (text: string, isSuccess: boolean) => {
  const paddedText = text.padEnd(BOX_WIDTH - 4);
  const borderColor = isSuccess ? SUCCESS_COLOR : ERROR_COLOR;

  console.log(`${borderColor}┌${'─'.repeat(BOX_WIDTH - 2)}┐${RESET_COLOR}`);
  console.log(`${borderColor}│ ${paddedText} │${RESET_COLOR}`);
  console.log(`${borderColor}└${'─'.repeat(BOX_WIDTH - 2)}┘${RESET_COLOR}`);
};

const currentAliases = new Set<string>();
for (const key in config['git-alias']) {
  const value = config['git-alias'][key];
  currentAliases.add(key);

  drawBox(`✅  ${key}: ${value}`, true);
  execSync(`git config alias.${key} "${value}"`);
}

existingAliases.forEach((value, alias) => {
  if (!currentAliases.has(alias)) {
    drawBox(`❌  ${alias}: ${value}`, false);
    execSync(`git config --unset alias.${alias}`);
  }
});

console.log();