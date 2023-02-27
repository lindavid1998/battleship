import { convertCoordToIndex, convertIndexToCoord } from './dom';

const dim = 8;

test('converts 2D coordinate to grid index', () => {
	expect(convertCoordToIndex(dim, [0, 0])).toBe(0);
	expect(convertCoordToIndex(dim, [0, 1])).toBe(8);
	expect(convertCoordToIndex(dim, [1, 1])).toBe(9);
});

test('converts grid index to 2D coordinate', () => {
	expect(convertIndexToCoord(dim, 0)).toEqual([0, 0]);
	expect(convertIndexToCoord(dim, 8)).toEqual([0, 1]);
	expect(convertIndexToCoord(dim, 9)).toEqual([1, 1]);
});
