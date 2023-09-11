import './style.css'
import { app } from './app.js'

    document.querySelector('#app').innerHTML = `
    <div id="story">
        <h1>Lorem</h1>
            <img class="enemy" src="/wizard.png" alt="Enemy">
        <p id="t1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam facere. Dolor praesentium sint, aliquid amet laudantium eius totam earum dolorem quia saepe quo omnis perspiciatis, nihil cupiditate dignissimos fugit.</p>
        <div class="choices">
            <button id="b0">[1]</button>
            <button id="b1">[2]</button>
        </div>
    </div>
`

app(document.querySelector('#app'))
