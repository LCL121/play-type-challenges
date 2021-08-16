type arr1 = ['a', 'b', 'c']
type arr2 = [3, 2, 1]
type arr3 = []

type head1 = First<arr1> // expected to be 'a'
type head2 = First<arr2> // expected to be 3
type head3 = First<arr3>

type First<T extends any[]> = T extends [] ? never : T[0];

type A = {
  0: 1,
  1: 2,
  2: '3',
  3: '4'
}
type Filtler<T extends Record<string,any>, Condition> = {
  [K in keyof T]: T[K] extends Condition ? T[K] : never
}[keyof T]
type B = Filtler<A, string>

type AA = '' extends string ? 'a' : never; // 'a'
type BB = [1] extends [] ? 'b' : never; // never
type BBB = [1] extends {} ? 'bb' : never; // 'bb'
type BBBB = [1] extends {0: number} ? 'bbb' : never; // 'bbb'
type BBBBB = [1] extends {1: number} ? 'bbbb' : never; // 'never'
type CC = [] extends [] ? 'c' : never; // 'c'
type DD = {1: 1} extends {} ? 'd' : never; // 'd'
type EE = {} extends {} ? 'e' : never; // 'e'