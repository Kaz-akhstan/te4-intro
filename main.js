import './style.css'
import { app } from './app.js'

    document.querySelector('#app').innerHTML = `
    <div id="story">
        <h1 id="title" class="area-title">Lorem</h1>
        <div class="picture-container">
            <p>Pictures here</p>
        </div>
        <p id="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, numquam facere. Dolor praesentium sint, aliquid amet laudantium eius totam earum dolorem quia saepe quo omnis perspiciatis, nihil cupiditate dignissimos fugit.</p>
        <div id="btns" class="choices">
        </div>
    </div>
`

app(document.querySelector('#app'))
