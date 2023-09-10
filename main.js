import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <div class="healthbar">
        <div class="health"></div>
        <p class="title">Henchman</p>
    </div>
    <div class="monologue-container">
        <p id="monologue" class="monologue"></p>
    </div>
    <div>
        <p class="damage-number hidden-number">100</p>
    </div>
    <div class="enemy-container">
        <img class="enemy" src="/wizard.png" alt="Enemy">
    </div>
    <div id="hand" class="hand">
    </div>
`

app(document.querySelector('#app'))
