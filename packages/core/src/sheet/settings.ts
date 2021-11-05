export default function Settings(options) {
    const _settings = {
        width: window.innerWidth,
        height: window.innerHeight,
        preset: {
            row: {
                height: 25
            },
            col: {
                indexWidth: 60,
                width: 100,
            },
            grid: {
                strokeStyle: '#555'
            }
        },
    }

    const settings = {
        ..._settings,
        ...options
    }

    return settings
}
