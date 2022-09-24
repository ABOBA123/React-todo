import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [backgraung, setbackgraung] = useState("white-theme")
  return <div>
    <div id="backgraung-color" class="backgraung-color" > {setbackgraung}
    <p class="text-clicker">Count: {count}</p>
    <button class="clicker" onClick={() => setCount((c) => c + 1)}> click me!</button>
    <button class="white-theme" onClick={() => setbackgraung((c) => "white-theme")}>Смена темы</button>
    <button class="black-theme" onClick={() => setbackgraung((c) => "black-theme")}>Смена темы</button>
  </div>
  </div>;
}

export default App;
