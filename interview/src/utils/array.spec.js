import { paginate } from './array';

it('paginate tests', () => {
  expect(paginate([1, 2, 3, 4, 5, 6], 2, 2)).toEqual([3, 4]);
  expect(paginate([1, 2, 3, 4, 5, 6], 2, 1)).toEqual([1, 2]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1)).toEqual([
    1,
    2,
    3,
    4,
  ]);
  expect(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 2)).toEqual([
    5,
    6,
    7,
    8,
  ]);
});
