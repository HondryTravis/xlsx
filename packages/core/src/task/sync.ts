type ISyncCallback = (callback:Function)=> {}

export function syncQueueTask() {
    const queue = [];

    const exec = (callback: ISyncCallback) => {
        while (queue.length) {
            const f = queue.shift();
            callback(f)
        }
        return true;
    }

    const add = (task: Function) => {
        queue.push(task);
    }

    return {
        add,
        exec
    };
}
