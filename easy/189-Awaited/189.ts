// Promise<ExampleType>

type A = Promise<string>;

type getPromiseType<T> = T extends Promise<infer U> ? U : unknown;

type a = getPromiseType<A>;
