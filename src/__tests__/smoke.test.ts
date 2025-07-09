/**
 * Smoke test to verify Jest setup is working correctly
 */

describe('Smoke Tests', () => {
  it('should pass a basic test', () => {
    expect(true).toBe(true);
  });

  it('should perform basic arithmetic', () => {
    expect(2 + 2).toBe(4);
    expect(10 - 5).toBe(5);
    expect(3 * 4).toBe(12);
  });

  it('should work with arrays', () => {
    const testArray = [1, 2, 3];
    expect(testArray).toHaveLength(3);
    expect(testArray).toContain(2);
  });

  it('should work with objects', () => {
    const testObject = { name: 'Test', value: 42 };
    expect(testObject).toHaveProperty('name');
    expect(testObject.name).toBe('Test');
    expect(testObject.value).toBe(42);
  });
});