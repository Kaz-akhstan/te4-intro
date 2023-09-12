import choices from './choices.json'

export function app (element) {
    const _buttons = [element.querySelector('#a0'), element.querySelector('#a1')]
    const _title = element.querySelector('#title')
    const _picture = element.querySelector('#picture')
    const _desc = element.querySelector('#desc')
    const _speed = 100
    let _isPrinting = false
    let _choiceIndex = 0

    _buttons.forEach(button => {
        button.addEventListener('click', (e) => {
            processChoice(button)
        })
    })

    loadScenario()

    function loadScenario() {
        _title.innerHTML = choices[_choiceIndex].title
        _desc.innerHTML = choices[_choiceIndex].content
        _buttons.forEach(button => {
            button.innerHTML = choices[_choiceIndex].options[parseInt(button.id[1])].content
        });
    }

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