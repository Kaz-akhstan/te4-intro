import choices from './choices.json'

export function app (element) {
    let _buttons = []
    const _title = element.querySelector('#title')
    const _picture = element.querySelector('#picture')
    const _desc = element.querySelector('#desc')
    const _btnContainer = element.querySelector('#btns')
    const _speed = 100
    let _isPrinting = false
    let _choiceIndex = 0

    function addButton(amount) {
        _buttons = []
        _btnContainer.innerHTML = ''
        for(let i = 0; i < amount; i++) {
            let b = document.createElement('button')
            b.id = 'a'+i
            b.addEventListener('click', (e) => {
                processChoice(b)
            })
            _btnContainer.appendChild(b)
            _buttons.push(b)
        }
    }

    loadScenario()

    function loadScenario() {
        _title.innerHTML = choices[_choiceIndex].title
        _desc.innerHTML = choices[_choiceIndex].content
        addButton(choices[_choiceIndex].options.length)
        _buttons.forEach(button => {
            button.innerHTML = choices[_choiceIndex].options[parseInt(button.id[1])].content
        });
    }

    function processChoice(button) {
        _choiceIndex = choices[_choiceIndex].options[parseInt(button.id[1])].consequence
        loadScenario()
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