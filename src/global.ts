import { ITracer } from './i-tracer';

let _globalTracer: ITracer;

export function initGlobalTracer(tracer: ITracer) {
    _globalTracer = tracer;
}

export function globalTracer() {
    return _globalTracer;
}