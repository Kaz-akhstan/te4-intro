import cards from './cards.json'

export function app (element) {
    const _speed = 100
    const _animationSpeed = 500
    element.querySelector('.card-container').addEventListener('click', (e) => {
        console.log("Click")
        createCard('introduction')

        element.querySelector('#introduction').classList.add("removed")
        removeCard('#introduction')
        printLine(cards.introduction.title, '#test', 0)
    })

    function createCard(title) {
        let e = document.createElement('div')
        e.innerHTML = (`
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
        `)
        element.querySelector('#hand').appendChild(e)
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