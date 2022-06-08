const uniq = require('lodash/uniq');

const items = [
    'bombolê',
    'bola',
    'cachorro',
    'ave',
    'cavalo',
    'gato',
    'cachorro',
    'cavalo',
    'gato'
];

console.log(process.env.ENVIRONMENT_NAME);

console.log('-------- OLD ITEMS -------');
console.log(items);
console.log('-------- NEW ITEMS -------');
console.log(uniq(items));