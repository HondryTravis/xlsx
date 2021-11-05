type IPoint = [number, number];



const dpr = () => window.devicePixelRatio || 1;

const dpx = (px) => Math.floor(px * dpr())

const thinLineWidth = () => dpr() - 0.5;

const dpxLineWidth = (px) => {
    const n = dpx(px);
    return n >= 1 ? n - 0.5 : 0.5;
}

export const Point = (x:number, y:number):IPoint => [dpxLineWidth(x), dpxLineWidth(y)]

export function createRenderer(current: HTMLCanvasElement) {
    const node = current
    const ctx = node.getContext('2d')

    const attr = (name: string, value: any) => {
        if (!Reflect.has(ctx, name)) return null

        if (value) {
            Reflect.set(ctx, name, value)
        } else {
            return Reflect.get(ctx, name)
        }
    }

    const attrs = (...args) => {
        if (args.length == 2) {
            const [name, value] = args
            return attr(name, value)
        } else {
            for (const [name, value] of Object.entries(args[0])) attr(name, value)
        }
    }

    const preset = (options) => {
        const { width, height } = options
        // 实际显示大小
        node.style.width = `${width}px`
        node.style.height = `${height}px`

        // 画布大小
        node.width = dpx(width)
        node.height = dpx(height)
    }

    const line = (start: IPoint, end: IPoint) => {
        ctx.save()
        ctx.beginPath()
        ctx.moveTo(...start)
        ctx.lineTo(...end)
        ctx.stroke()
        ctx.closePath()
        ctx.restore()
    }

    // 清除整个表格容器
    const clear = (point: IPoint = [0, 0]) => {
        const { width, height } = node
        ctx.clearRect(point[0], point[1], width, height)
    }

    return {
        get current() {
            return node
        },
        get ctx() {
            return ctx
        },
        attr,
        attrs,
        clear,
        preset,
        line
    }
}



export function createCell(renderer, options) {

}
