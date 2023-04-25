export interface ITracerSpan {
    finish(finishTime?: number): void;

    log(keyValuePairs: { [key: string]: any; }, timestamp?: number): ITracerSpan;

    setTag(key: string, value: any): ITracerSpan;
}