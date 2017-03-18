export declare class Promise<T> {
    constructor(resolver: (onSuccess: (...T) => void, onFail: (...T) => void) => void);
    catch(onRejected: any): Promise<{}>;
    then(onFulfilled?: (...args) => void, onRejected?: (...args) => void): Promise<{}>;
    static all(iterable: any): Promise<any>;
    static race(iterable: any): Promise<any>;
}
