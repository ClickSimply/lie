export declare class Promise<T> {
    _state: string[];
    _queue: _QueueItem[];
    _outcome: any;
    _handled: string[] | null;
    constructor(resolver: (onSuccess: (...T) => void, onFail: (...T) => void) => void);
    catch(onRejected: any): Promise<{}>;
    then(onFulfilled?: (...args) => void, onRejected?: (...args) => void): Promise<{}>;
    static resolve(value: any): Promise<any>;
    static reject(reason: any): Promise<any>;
    static all(iterable: any): Promise<any>;
    static race(iterable: any): Promise<any>;
}
