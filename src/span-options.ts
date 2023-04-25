import { ITracerSpan } from './i-span';
import { ITracerSpanContext } from './i-span-context';

export type SpanOptions = Partial<{
    childOf: ITracerSpan | ITracerSpanContext;
    startTime: number;
    tags: { [key: string]: any; };
}>;