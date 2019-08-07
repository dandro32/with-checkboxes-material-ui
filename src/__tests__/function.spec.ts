import { testMethod } from '..';

test('create', () => {
  expect(testMethod('a')).toBe('Helloa');
});
