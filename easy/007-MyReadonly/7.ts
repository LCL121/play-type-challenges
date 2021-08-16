interface Todo007 {
  title: string
  description: string
}

const todo007: MyReadonly<Todo007> = {
  title: "Hey",
  description: "foobar"
}

todo007.title = "Hello" // Error: cannot reassign a readonly property
todo007.description = "barFoo" // Error: cannot reassign a readonly property

type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
}
