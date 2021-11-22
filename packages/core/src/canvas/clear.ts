type IClearProps = [x: number, y: number, width: number, height: number]

// 清除
export function clear(ctx: CanvasRenderingContext2D, props: IClearProps): void {
    ctx.clearRect(...props)
}
