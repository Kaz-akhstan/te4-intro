import Typewriter from 'typewriter-effect/dist/core';

export function app (element) {
    const _speed = 500
    let i = 0
    const _introduction = 'Detta är ett CV'
    element.querySelector('#start').addEventListener('click', (e) => {
        printLine(_introduction, '#test')
        printLine(_introduction, '#a')
    })

    function printLine(string, id) {
        let tw = new Typewriter(id, {
            cursor: '_'
          })
        tw.start()
        tw.typeString(_introduction)
    }
}