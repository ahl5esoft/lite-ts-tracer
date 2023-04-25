import { ITracerSpan } from './i-span';
import { ITracerSpanContext } from './i-span-context';
import { SpanOptions } from './span-options';

export abstract class TracerBase {
    public abstract extract(format: string, carrier: any): ITracerSpanContext;

    public abstract inject(ctx: ITracerSpan | ITracerSpanContext, format: string, carrier: any): void;

    public abstract startSpan(name: string, options?: SpanOptions): ITracerSpan;
}