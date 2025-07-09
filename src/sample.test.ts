describe('Sample Test Suite', () => {
  test('should pass a simple arithmetic test', () => {
    expect(1 + 1).toBe(2);
  });

  test('should check string equality', () => {
    expect('hello').toBe('hello');
  });

  test('should verify array contains element', () => {
    const fruits = ['apple', 'banana', 'orange'];
    expect(fruits).toContain('banana');
  });
});