// 实现Pick
// https://github.com/type-challenges/type-challenges/blob/master/questions/4-easy-pick/README.zh-CN.md

export type MyPick<T,K extends keyof T> = {
    [P in K]:T[P]
};

