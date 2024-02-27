const capitalize = require('./your-module'); // replace with the correct path

test('capitalize first character of a string', () => {
    expect(capitalize('hello')).toBe('Hello');
    expect(capitalize('world')).toBe('World');
    expect(capitalize('')).toBe(''); // empty string should remain empty
});

const reverseString = require('./your-module'); // replace with the correct path

test('reverse a string', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('world')).toBe('dlrow');
    expect(reverseString('')).toBe(''); // empty string should remain empty
});

const calculator = require('./your-module'); // replace with the correct path

test('add', () => {
    expect(calculator.add(2, 3)).toBe(5);
});

test('subtract', () => {
    expect(calculator.subtract(5, 3)).toBe(2);
});

test('multiply', () => {
    expect(calculator.multiply(2, 3)).toBe(6);
});

test('divide', () => {
    expect(calculator.divide(6, 3)).toBe(2);
});


const caesarCipher = require('./your-module'); // replace with the correct path

test('caesar cipher', () => {
    expect(caesarCipher('abc', 1)).toBe('bcd');
    expect(caesarCipher('xyz', 1)).toBe('yza');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    // Add more test cases for wrapping, same case, and punctuation
});

const analyzeArray = require('./your-module'); // replace with the correct path

test('analyze array', () => {
    const result = analyzeArray([1, 8, 3, 4, 2, 6]);
    expect(result).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    });
});
