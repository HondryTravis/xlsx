export type IArgs = [ctx: CanvasRenderingContext2D, ...args: any[]] | [...args: any[]]

export function attr(ctx: CanvasRenderingContext2D, name: string, value: any) {
    if (!Reflect.has(ctx, name)) return null

    if (value) {
        Reflect.set(ctx, name, value)
    } else {
        return Reflect.get(ctx, name)
    }
}

export function attrs(...args: IArgs) {

    if (args.length > 3 || args.length < 2) return false

    if (args.length == 3) {
        const [ctx, name, value] = args
        return attr(ctx, name, value)
    } else {
        const [ctx, attrs] = args
        for (const [name, value] of Object.entries(attrs)) attr(ctx, name, value)
    }
}
