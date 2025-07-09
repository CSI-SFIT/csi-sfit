import { render } from '@testing-library/react';

// Smoke test to verify Jest setup is working
describe('Jest Setup', () => {
  test('should run basic tests', () => {
    expect(1 + 1).toBe(2);
  });

  test('should handle string operations', () => {
    const message = 'Jest is working!';
    expect(message).toContain('Jest');
    expect(message.length).toBeGreaterThan(0);
  });

  test('should work with arrays', () => {
    const technologies = ['React', 'TypeScript', 'Jest'];
    expect(technologies).toHaveLength(3);
    expect(technologies).toContain('Jest');
  });

  test('should handle object operations', () => {
    const project = {
      name: 'CSI SFIT',
      type: 'React App',
      hasTests: true
    };
    expect(project.name).toBe('CSI SFIT');
    expect(project.hasTests).toBeTruthy();
    expect(Object.keys(project)).toHaveLength(3);
  });
});

// Basic React rendering test
describe('React Testing Library', () => {
  test('should render basic elements', () => {
    const TestComponent = () => <div data-testid="test">Hello Jest!</div>;
    const { getByTestId } = render(<TestComponent />);
    
    const element = getByTestId('test');
    expect(element).toBeTruthy();
    expect(element.textContent).toBe('Hello Jest!');
  });
});