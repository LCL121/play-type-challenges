type TestA = '' extends string ? 'a' : never; // 'a'
type TestB = [1] extends [] ? 'b' : never; // never
type TestBB = [1] extends {} ? 'bb' : never; // 'bb'
type TestBBB = [1] extends {0: number} ? 'bbb' : never; // 'bbb'
type TestBBBB = [1] extends {1: number} ? 'bbbb' : never; // 'never'
type TestC = [] extends [] ? 'c' : never; // 'c'
type TestD = {1: 1} extends {} ? 'd' : never; // 'd'
type TestE = {} extends {} ? 'e' : never; // 'e'

type TestA2 = 'a' | 'b' | 'c' extends 'a' ? true : false; // false
type TestB2 = 'a' extends 'a' | 'b' | 'c' ? true : false; // true
