import './style.css'
import { app } from './app.js'

document.querySelector('#app').innerHTML = `
    <p id="test"></p>
    <div class="hand">
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
        <div id="introduction" class="card-container">
            <p class="card-title">Introduction</p>
            <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. A quod, ea minima, doloremque odit ratione eligendi possimus dignissimos aliquid dolore tempora enim itaque, vero tenetur numquam dolorum! Aperiam, aliquid ipsam.</p>
        </div>
    </div>
`

app(document.querySelector('#app'))
