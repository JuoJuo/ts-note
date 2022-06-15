// 交叉数据类型
// 是同名属性求交集，不同名属性并集

type MyParticial<K, V extends keyof K> = {
  [P in V]?: K[P];
} & Omit<K, V>;

type Simplify<T> = {
  [P in keyof T]: T[P];
};

type User = {
  name: string;
  age: number;
};

type test = MyParticial<User, "name">;
type test2 = Simplify<MyParticial<User, "name">>;

// 只能是string symbol
type IndexSignature = {
  [key: string]: string;
};
// 比上面强
type IndexSignature2 = Record<string, string>;
const demo0: IndexSignature = {
  name: "a",
  1: "1",
};

// js number 作为索引的时候，都会被转成字符串
// ts为了保持一致也就这样做了
type special = keyof IndexSignature; //string|number

// any unkonwn type
// unknown需要自己通过typeof，instanceof，明确类型
function test11(demo: unknown) {
  // 没有判断就报错
  if (typeof demo === "string") {
    console.log(demo.indexOf("xxx"));
  }
}
