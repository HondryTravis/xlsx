
// 字母
const alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']


export function indexAt(index) {
    let prefix = 0

    while (index >= alphabets.length) {
        index = index - alphabets.length
        prefix ++
    }

    return prefix > 0
        && (alphabets[prefix] + alphabets[index])
        || alphabets[index]
}
