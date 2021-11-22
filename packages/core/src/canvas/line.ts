import { ICoordinatePoints } from "./base"
import { attrs, IArgs } from "./attr"

interface ILineOptions {
    points: ICoordinatePoints,
    attrsCallback:() => IArgs | []
}
export function line(ctx: CanvasRenderingContext2D, options: ILineOptions) {

    const { points, attrsCallback } = options
    const [ start, end ] = points

    const props = attrsCallback()
    ctx.save()

    attrs(ctx, props)

    ctx.beginPath()
    ctx.moveTo(...start)
    ctx.lineTo(...end)
    ctx.stroke()
    ctx.closePath()

    ctx.restore()
}
