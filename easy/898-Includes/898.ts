type Includes<T extends unknown[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? First extends U
    ? true
    : Includes<Rest, U>
  : false;

// expected to be `false`
type isPillarMen1 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Dio">;
type isPillarMen2 = Includes<["Kars", "Esidisi", "Wamuu", "Santana"], "Kars">;
