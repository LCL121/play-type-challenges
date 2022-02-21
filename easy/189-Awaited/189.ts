// Promise<ExampleType>

type A189 = Promise<string>;

// type MyAwaited<P extends Promise<any>> = P extends Promise<infer A> ? A : unknown;
type MyAwaited<T> = T extends Promise<infer U> ? U : unknown;

type a = MyAwaited<A189>;
