export function app (element) {
    const _speed = 100
    let i = 0
    const _introduction = 'Detta är ett CV Detta är ett CV'
    element.querySelector('#start').addEventListener('click', (e) => {
        printLine(_introduction, '#test')
    })

    function printLine(string, id) {
        if(i < string.length) {
            element.querySelector(id).innerHTML += string.charAt(i)
            i++
            sleep(_speed).then(() => {
                printLine(string, id)
            })
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}