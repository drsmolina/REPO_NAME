import { describe, it, expect } from 'vitest';
import { startOfWeek } from './App';

describe('startOfWeek', () => {
  it('returns Sunday of the same week for any given day', () => {
    const expected = new Date(2024, 4, 12); // Sunday, May 12, 2024
    expected.setHours(0, 0, 0, 0);
    const dates = [
      new Date(2024, 4, 12), // Sunday
      new Date(2024, 4, 13), // Monday
      new Date(2024, 4, 14), // Tuesday
      new Date(2024, 4, 15), // Wednesday
      new Date(2024, 4, 16), // Thursday
      new Date(2024, 4, 17), // Friday
      new Date(2024, 4, 18), // Saturday
    ];
    for (const d of dates) {
      const result = startOfWeek(d);
      expect(result).toEqual(expected);
    }
  });

  it('returns a Date at midnight', () => {
    const result = startOfWeek(new Date(2024, 4, 15, 15, 30));
    expect(result.getHours()).toBe(0);
    expect(result.getMinutes()).toBe(0);
    expect(result.getSeconds()).toBe(0);
    expect(result.getMilliseconds()).toBe(0);
  });
});
