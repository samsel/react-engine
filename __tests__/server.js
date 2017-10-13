import { create } from '../lib/server';

test('create fn', () => {
  const engine = create();
  expect(typeof engine).toBe('function');
});
