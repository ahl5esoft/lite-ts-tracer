import { ITracerSpanContext } from './i-span-context';
import { ITracer } from './i-tracer';

export interface ITracerSpan {
    addTags(keyValueMap: { [key: string]: any; }): ITracerSpan;

    context(): ITracerSpanContext;

    finish(finishTime?: number): void;

    getBaggageItem(key: string): string;

    log(keyValuePairs: { [key: string]: any; }, timestamp?: number): ITracerSpan;

    logEvent(eventName: string, payload: any): void;

    setBaggageItem(key: string, value: string): ITracerSpan;

    setOperationName(name: string): ITracerSpan;

    setTag(key: string, value: any): ITracerSpan;

    tracer(): ITracer;
}