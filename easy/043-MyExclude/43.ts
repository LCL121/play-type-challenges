type T0 = MyExclude<"a" | "b" | "c", "a">; // "b" | "c"
type T1 = MyExclude<"a" | "b" | "c", "a" | "b">; // "c"
type T2 = MyExclude<string | number | (() => void), Function>; // string | number

type MyExclude<T, U> = T extends U ? never : T;

type A = 'a' | 'b' | 'c' extends 'a' ? true : false; // ???????????
