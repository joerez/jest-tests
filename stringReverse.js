function stringReverse(string) {
    let reverseString = [];
    string = string.split("");

    for (let i = 0; i < string.length; i++) {
        reverseString.unshift(string[i]);
    }

    reverseString = reverseString.join('');
    return reverseString;
}

module.exports = stringReverse;