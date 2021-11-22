export type IPoint = [number, number];

export type ICoordinatePoints = [...point: IPoint[]];


export const dpr = () => window.devicePixelRatio || 1;

export const dpx = (px) => Math.floor(px * dpr())

export const thinLineWidth = () => dpr() - 0.5;

export const dpxLineWidth = (px) => {
    const n = dpx(px);
    return n >= 1 ? n - 0.5 : 0.5;
}

export const Point = (x:number, y:number):IPoint => [dpxLineWidth(x), dpxLineWidth(y)]
