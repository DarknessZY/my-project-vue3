declare type PickAttr<T, D extends keyof T> = {
    [P in D]: T[D];
}[D];
