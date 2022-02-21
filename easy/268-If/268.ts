// type If<C extends true|false, T F> = C extends true ? T : F;
type If<T, U1, U2> = T extends true ? U1 : U2;

type A268 = If<true, 'a', 'b'>  // expected to be 'a'
type B268 = If<false, 'a', 'b'> // expected to be 'b'
