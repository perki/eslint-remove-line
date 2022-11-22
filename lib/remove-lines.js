'use strict';

const isStr = (a) => typeof a === 'string';

module.exports = (data, lines) => {
    const dataLines = data.split('\n');
    
    for (const line of lines) {
        delete dataLines[line.num - 1];
      console.log(dataLines[line.num - 1]);
    }
    
    return dataLines
        .filter(isStr)
        .join('\n');
};

