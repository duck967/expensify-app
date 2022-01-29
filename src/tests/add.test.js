const add = (a, b) => a + b;

const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`;

test('should add two numbers', () => {
    const result = add(3, 4);

    expect(result).toBe(7);
});

test('should greet named person', () => {
    const result = generateGreeting("Travis T O'Justice");

    expect(result).toBe("Hello Travis T O'Justice!");
});

test('should greet Anonymous by default', () => {
    const result = generateGreeting();

    expect(result).toBe("Hello Anonymous!");
});