type Person = {
  name: string;
  age: number;
  1: string;
  getName: () => string;
};

type a = Simplify<keyof Person>;
type Rename<T> = {
  [P in keyof T as `toNew${Capitalize<string & P>}`]: T[P];
};

// 左边是never，属性值都会被过滤掉
type ExcludeKey<T> = {
  [P in keyof T as Exclude<P, "name">]: T[P];
};
type c = Simplify<Rename<Person>>;
type c1 = Simplify<ExcludeKey<Person>>;

// infer完全就是想白嫖
type d = string[];
type d2 = number[];
// U只能在true分支使用，infer只能在extends条件类型的子句中使用
type getD<T> = T extends (infer U)[] ? U : never;

type d3 = getD<d>;
type d4 = getD<d2>;

type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;
type T0 = Unpacked<string>; // string
type T1 = Unpacked<string[]>; // string
type T2 = Unpacked<() => string>; // string
type T3 = Unpacked<Promise<string>>; // string
type T4 = Unpacked<Promise<string>[]>; // Promise<string>
type T5 = Unpacked<Unpacked<Promise<string>[]>>; // string

type PropertyType<T> = T extends { name: infer U; age: infer U } ? U : never;
type PropertyType2<T> = T extends {
  a: (param: infer U) => void;
  b: (param2: infer U) => void;
}
  ? U
  : never;

type u4 = PropertyType<Person>;
type TJI = {
  a: (param: string) => void;
  b: (param2: number) => void;
};
type u3 = PropertyType2<TJI>;
