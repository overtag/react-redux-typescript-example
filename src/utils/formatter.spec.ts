import { formatter, FORMAT_NUMBER } from './formatter';

test('formatter, FORMAT_NUMBER  ', () => {
  expect(formatter(100.3333, FORMAT_NUMBER)).toBe('100.33');
});
