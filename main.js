import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <p id="test"></p>
    <div class="healthbar">
        <div class="health"></div>
    </div>
    <dir>
        <p id="monologue" class="monologue"></p>
    </dir>
    <div class="enemy-container">
        <img src="/wizard.png" alt="">
    </div>
    <div id="hand" class="hand">
    </div>
`

app(document.querySelector('#app'))
