type Concat<T extends unknown[], U extends unknown[]> = U extends [infer First, ...infer Rest] ? Concat<[...T, First], Rest> : T;

type Result = Concat<[1, 1], [2, 3, 4]> // expected to be [1, 1, 2, 3, 4]
