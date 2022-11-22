const camelcase = require('camelize');

const isStr = (a) => typeof a === 'string';


module.exports = (data, lines) => {
    const dataLines = data.split('\n');
    
    for (const line of lines) {
     
      const lStr = dataLines[line.num - 1];
      const start = lStr.substring(0, line.col - 1);
      const temp = lStr.substring(line.col - 1);
      const regex = /(\w)*/g;
      const match = temp.match(regex)[0];
      const trail = lStr.substring(line.col + match.length - 1);
      const cleaned = camelcase(match);
      const newLine = start + cleaned + trail

      console.log(line, '\n', newLine, '\n', lStr);
      dataLines[line.num - 1] = newLine;
      //delete dataLines[line - 1];

    }
    
    return dataLines
        .filter(isStr)
        .join('\n');
};

