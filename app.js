import cards from './cards.json'

export function app (element) {
    const _speed = 100
    const _animationSpeed = 500
    element.querySelector('.card-container').addEventListener('click', (e) => {
        console.log("Click")
        createCard(cards.introduction)

        element.querySelector('#introduction').classList.add("removed")
        removeCard('#introduction')
        printLine(cards.introduction.title, '#test', 0)
    })

    function createCard(name) {
        let div = document.createElement('div')
        let pTitle = document.createElement('p')
        let pDesc = document.createElement('p')
        div.classList.add('card-container')
        pTitle.classList.add('card-title')
        pDesc.classList.add('card-description')

        pTitle.innerHTML = name.title
        pDesc.innerHTML = name.content

        div.appendChild(pTitle)
        div.appendChild(pDesc)
        element.querySelector('#hand').appendChild(div)
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