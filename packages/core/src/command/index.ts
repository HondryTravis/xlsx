export function Command() {
    const command = new Map<string, Function>()

    const exec = (key, ...args: ParameterDecorator[]) => {
        if (!command.has(key)) return false

        return command.get(key)(...args)
    }

    const add = (key: string, value: Function, force = true, forceCallback: Function) => {

        if (!forceCallback || typeof forceCallback !== 'function') {
            forceCallback = function(cmd: Map<string, Function>) {return false;}
        }

        if (command.has(key)) {
            if (force) command.set(key, value)
            else return forceCallback(command)
        } else command.set(key, value)
    }

    const remove = (key: string) => command.delete(key)

    const has = (key: string) => command.has(key)

    return {
        get current() {
            return command
        },
        exec,
        add,
        remove,
        has
    }
}
