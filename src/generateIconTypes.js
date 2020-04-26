const testFolder = './assets/icons';
const fs = require('fs');

console.clear();
fs.readdirSync(testFolder).forEach((file) => {
  const name = file.substr(0, file.lastIndexOf('.'));

  const nameSplitUp = name.split('-');

  const nameSplitUpCased = nameSplitUp.map((part) => {
    const casedWord = part.charAt(0).toUpperCase() + part.substr(1);
    return casedWord;
  });

  let componentName = nameSplitUpCased.join('');

  if (name === '500px') {
    componentName = 'FiveHundredPx';
  }
  //   console.log(`'${name}': ${componentName},`);

  console.log(`import ${componentName} from '../../assets/icons/${file}'`);
});
