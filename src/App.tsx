import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Christopher Eichert</title>
  </head>
  <body>
    <div id="root"></div>
    <b>Christopher Eichert</b>
    <p>Hello this is my website</p>

    <strong>Info</strong>
    <br>
    <a href="https://github.com/Ceichert31">GitHub</a>
    <br>
    <a href="https://pineapple3114.itch.io/">itch.io</a>
    <br>
    <a href="https://www.linkedin.com/in/christophereichert/">LinkedIn</a>

    <br>
    <br>
    <strong>Projects</strong>
    <br>
    <a href="https://github.com/Ceichert31/BananaGit">Banana Git</a>
    <br>
    <a href="https://github.com/Ceichert31/VulkanRenderer">Vulkan Graphics Engine</a>

    <br>
    <br>
    <strong>Game Projects</strong>
    <br>
    <a href="https://ceichert31.itch.io/modulings">Modulings</a>
    <br>
    <a href="https://canik.itch.io/dwarvenfortune">Dwarven Fortune</a>
    <br>
    <a href="https://pineapple3114.itch.io/below-deck">Below Deck</a>
    <br>
    <a href="https://pineapple3114.itch.io/grave-digger">Grave Digger</a>
    <br>
    <a href="https://canik.itch.io/roachelles-motel">Roachelles Motel</a>
    <br>
    <a href="https://hoxfire.itch.io/loopify">Loopify</a>
    <br>
    <a href="https://snerds.itch.io/dungeongardengame">Dungeon Dater</a>
    <br>
    <a href="https://normalcreator5452.itch.io/final-light">Final Light</a>
    <br>
    <a href="https://pineapple3114.itch.io/deathscalator">Deathscalator</a>


    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
  )
}

export default App
