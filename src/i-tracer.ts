import { ITracerSpan } from './i-span';
import { ITracerSpanContext } from './i-span-context';
import { SpanOptions } from './span-options';

export interface ITracer {
    extract(format: string, carrier: any): ITracerSpanContext;

    inject(ctx: ITracerSpan | ITracerSpanContext, format: string, carrier: any): void;

    startSpan(name: string, options?: SpanOptions): ITracerSpan;
}