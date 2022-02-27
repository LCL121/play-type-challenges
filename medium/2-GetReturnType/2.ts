const fn = (v: boolean) => {
  if (v)
    return 1
  else
    return 2
}

type MyReturnType<T extends (...params: any[]) => any> = T extends (...params: any[]) => infer U ? U : never;

type a = MyReturnType<typeof fn> // should be "1 | 2"
