export function renderer(node, options) {
    let context = node.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.save();
}
