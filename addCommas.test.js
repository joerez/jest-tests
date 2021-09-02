const addCommas = require('./addCommas');

test('1000 should become 1,000.', () => {
    expect(addCommas(1000)).toBe('1,000');
})

test('10000 should become 10,000.', () => {
    expect(addCommas(10000)).toBe('10,000');
})


test('100000 should become 100,000.', () => {
    expect(addCommas(100000)).toBe('100,000');
})
