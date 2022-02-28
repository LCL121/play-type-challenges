interface Todo {
  title: string
  description: string
  completed: boolean
}

type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key1 in K]: T[Key1]
} & {
  [Key2 in Exclude<keyof T, K>]: T[Key2]
}

// type MyReadonly2<T, K extends keyof T = keyof T> = {
//   readonly [Key in K] :T[Key]
// } & {
//   [Key in Exclude<keyof T, K>] :T[Key]
// }

const todo88: MyReadonly2<Todo> = {
  title: "1",
  description: "c",
  completed: true
}

todo88.title = "l";
todo88.description = "l";
todo88.completed = false;

const todo8: MyReadonly2<Todo, 'title' | 'description'> = {
  title: "Hey",
  description: "foobar",
  completed: false,
}

todo8.title = "Hello" // Error: cannot reassign a readonly property
todo8.description = "barFoo" // Error: cannot reassign a readonly property
todo8.completed = true // OK