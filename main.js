import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <p id="test"></p>
    <div class="healthbar">
        <div class="health"></div>
    </div>
    <div id="hand" class="hand">
    </div>
`

app(document.querySelector('#app'))
