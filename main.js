import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
<h1 id="start">Rasmus Johansson</h1>
<p id="test"></p>
<p id="a"></p>
`

app(document.querySelector('#app'))
