import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <div class="healthbar">
        <div class="health"></div>
    </div>
    <div class="monologue-container">
        <p id="monologue" class="monologue"></p>
    </div>
    <div class="enemy-container">
        <img class="enemy" src="/wizard.png" alt="Enemy">
    </div>
    <div id="hand" class="hand">
    </div>
`

app(document.querySelector('#app'))
