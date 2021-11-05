import NativeEventTarget from '../event';
import Settings from './settings'
import { createRenderer } from '../canvas'
import * as Shape from '../shape'


function getBoundingRect(node: Element) {
    return node.getBoundingClientRect()
}

export function NativeSheet(options) {

    const settings = Settings(options)
    const events = NativeEventTarget()

    const current:any = {
        ...events,
        settings: settings,
    }

    const resize = () => {
        const prop = getBoundingRect(current.wrapper)
        settings.width = prop.width
        settings.height = prop.height
        current.renderer.preset(settings)
    }

    const preset = () => {

        current.editor = document.createElement('canvas')
        current.wrapper = document.querySelector(settings.container)

        current.wrapper.appendChild(current.editor)

        current.renderer = createRenderer(current.editor)

        resize()

        current.on('resize', () => {
            render()
        })
    }

    const render = () => {
        resize()
        current.renderer.clear()
        Shape.paintGrid(current.renderer, settings)
    }

    const getSettings = (key, defaultValue) => {

        if (!Reflect.has(settings, key)) return null

        return Reflect.get(settings, key) || defaultValue
    }

    preset()

    return {
        ...current,
        render,
        getSettings,
    }
}


export default NativeSheet
