'use strict';

const {promisify} = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

const forceCamel = require('./force-camelcase');
const removeLines = require('./remove-lines');

module.exports = async (name, lines) => {
    const data = await readFile(name, 'utf8');
    const result = forceCamel(data, lines);
    console.log('>>>>> ', name);
    await writeFile(name, result);
};

