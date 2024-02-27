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
