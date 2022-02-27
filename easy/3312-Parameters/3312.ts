interface IA3312 {
  a: string;
  b: number;
}

interface IAResult3312 extends IA3312 {
  c: []
}

function A(params: IA3312) {
  const result: IAResult3312 = {
    ...params,
    c: []
  }
  return result;
}

type Parameters3312<T extends (...args: any[]) => any> = T extends (...args: infer R) => any ? R : never;

type AFuncResult3312 = Parameters3312<typeof A>;
