const stringReverse = require('./stringReverse');

function addCommas(num) {
    num = `${num}`;

    // go from end of string to begginning of string, and every three characters add a comma. (use % 3)
    num = stringReverse(num);
    num = num.split('');
    
    for (let i = 0; i < num.length; i++) {
        if (i - 1 % 3 === 2) {
            num.splice(i, 0, ',');
        }
    }
    num = num.join('');
    num = stringReverse(num);
    return num;
}

module.exports = addCommas;

addCommas(10000);