import cards from './cards.json'

export function app (element) {
    const _speed = 100
    const _animationSpeed = 500
    let _hp = 100
    let _isPrinting = false

    createCard(cards.introduction)
    createCard(cards.experience)
    createCard(cards.education)

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
        div.addEventListener('click', (e) => {
            if(!_isPrinting) {
                dealDamage(5)
                printLine('Detta är en monolog och ett cv', '#monologue', 0)
                removeCard(div)
                createCard(cards.introduction)
            }
        })
    }

    function dealDamage(amount) {
        let e = element.querySelector('.health')
        _hp -= amount
        e.style.width = _hp + '%'
    }

    function removeCard(obj) {
        obj.classList.add('removed')
        sleep(_animationSpeed).then(() => {
            obj.remove()
        })
    }

    function printLine(string, id, index) {
        _isPrinting = true
        if(index < string.length) {
            element.querySelector(id).innerHTML += string.charAt(index)
            index++
            sleep(_speed).then(() => {
                printLine(string, id, index)
            })
        }
        else {
            _isPrinting = false
        }
    }

    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }

}