type X = { 
  x: { 
    a: 1
    b: 'hi'
  }
  y: 'hey'
}

type Expected = { 
  readonly x: { 
    readonly a: 1
    readonly b: 'hi'
  }
  readonly y: 'hey' 
}

type DeepReadonly<T> = {
  readonly [K in keyof T]: T[K] extends Record<string, unknown> ? DeepReadonly<T[K]> : T[K]
}

type Todo = DeepReadonly<X> // should be same as `Expected`
