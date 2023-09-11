import choices from './choices.json'

export function app (element) {
    const buttons = [element.querySelector('#b0'), element.querySelector('#b1')]
    const _speed = 100
    let _isPrinting = false
    let _choiceIndex = 0

    buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            
        })
    })

    function processChoice(button) {
        
    }

    function printLine(string, id, index) {
        if(!_isPrinting) {
            element.querySelector(id).innerHTML = ""
        }
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