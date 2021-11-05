
export default function NativeEventTarget() {
    const events: Map<string, Function[]> = new Map();

    const on = (type: string, listener: Function) =>{
        if (events.has(type)) {
            const _event = events.get(type)
            _event.push(listener);
        } else {
            events.set(type, [listener]);
        }
    }

    const off = (type: string, listener: Function) =>{
        if (!events.has(type)) return;

        if (!listener) return events.delete(type);

        const _event = events.get(type)
        const index = _event.indexOf(listener);

        if (index > -1) _event.splice(index, 1);
    }

    const fire = (type:string, ...args: IArguments[]) => {
        if (!events.has(type)) return;

        const _event = events.get(type)
        _event.forEach(listener => listener(...args));
    }

    const exports = {
        on,
        off,
        fire
    }

    return exports
}
