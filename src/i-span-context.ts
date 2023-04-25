export interface ITracerSpanContext {
    toTraceId(): string;

    toSpanId(): string;
}