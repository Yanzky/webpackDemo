// export * from './circle'   //此方法是export 和 import的混合用法，输入的属性和方法直接输出，但使用 * 会忽略默认方法
// 或 先起别名
export {area as areaCircle} from './circle'
export var e = 2.71828182846
export default function (x) {
    return Math.exp(x)
}
