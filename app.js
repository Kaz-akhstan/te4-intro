import cards from './cards.json'

export function app (element) {
    const _speed = 100
    const _animationSpeed = 500
    const _introduction = 'Detta är ett CV Detta är ett CV'
    element.querySelector('.card-container').addEventListener('click', (e) => {
        console.log("Click")
        element.querySelector('#introduction').classList.add("removed")
        removeCard('#introduction')
        printLine(cards.introduction.title, '#test', 0)
    })

    function createCard(index) {
        
    }

    function removeCard(id) {
        sleep(_animationSpeed).then(() => {
            element.querySelector(id).remove()
        })
    }

    function printLine(string, id, index) {
        if(index < string.length) {
            element.querySelector(id).innerHTML += string.charAt(index)
            index++
            sleep(_speed).then(() => {
                printLine(string, id, index)
            })
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}