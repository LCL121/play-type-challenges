interface Todo004 {
  title: string;
  description: string;
  completed: boolean;
}

type Todo004Preview = MyPick<Todo004, "title" | "completed">;

const todo004: Todo004Preview = {
  title: "Clean room",
  completed: false,
};

// 答案
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
}
