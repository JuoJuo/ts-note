// declare module可以声明一个模块
// declare module可以拓展一个模块，同名模块下的成员会做合并
declare module "*.css" {
  const content: { [className: string]: string };
  export = content;
  // 看情况，有可能那个css是默认导出的
}
