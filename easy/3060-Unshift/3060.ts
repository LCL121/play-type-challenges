type Unshift<T extends unknown[], U> = [U, ...T];

type Result3060 = Unshift<[1, 2], 0> // [0, 1, 2,]
