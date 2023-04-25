import { ITracerSpan } from './i-span';
import { ITracerSpanContext } from './i-span-context';

export interface ITracer {
    extract(format: string, carrier: any): void;

    inject(ctx: ITracerSpan | ITracerSpanContext, format: string, carrier: any): void;

    startSpan(name: string, options?: any): void;
}