const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type typeTuple = typeof tuple;

type Result = TupleToObject<typeof tuple>;

const result: TupleToObject<typeof tuple> // expected { tesla: 'tesla', 'model 3': 'model 3', 'model X': 'model X', 'model Y': 'model Y'}

// Object key 取自 T[number] 的值 且只能为 string | number | symbol
type TupleToObject<T extends readonly (keyof any)[]> = {
  [K in T[number]]: K;
}

type anyKey = keyof any;
