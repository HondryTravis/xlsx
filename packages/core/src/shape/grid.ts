import { Point } from '../canvas';

export function paintGrid(renderer, settings) {
    const { preset, width, height } = settings;


    renderer.attr('strokeStyle', preset.grid.strokeStyle)

    // rsh = rorStartHeight
    // csw = rowStartWidth
    let rsh = 0, csw = 0;

    while (rsh < height) {
        rsh += preset.row.height

        if (rsh >= height) break

        const start = Point(0, rsh)
        const end = Point(width, rsh)

        renderer.line(start, end)
    }


    while (csw < width) {
        csw += preset.col.width;

        if (csw >= width) break

        const start = Point(csw, 0)
        const end = Point(csw, height)

        renderer.line(start, end)
    }
}
