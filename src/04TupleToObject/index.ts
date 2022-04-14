// 接收元组的类型，返回一个键值对都是元组每一个值的对象

export type TupleToObject<T extends readonly(string|number)[]> = {
    [P in T[number]]:P
}