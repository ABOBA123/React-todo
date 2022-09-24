import { useState, useEffect } from "react";
import TextComponent from "./components/system/text/Text";

function App() {
  const [count, setCount] = useState(0);
  const [isLigth, setIsLigth] = useState(true);

  const [timeObj, setTimeObj] = useState(null);

  useEffect(() => {
    let date = new Date();
    let hours = date.getHours();
    if (hours > 19 || hours < 7) {
      setIsLigth(false);
    } else {
      setIsLigth(true);
    }
  }, []);

  // Создать новый useEffect, в массиве зависимостей которого будет timeObj
  // В котором мы обновляем дату для вывода на сайте. То есть свои часы на сайте

  return (
    <div>
      <div
        id='backgraung-color'
        className='backgraung-color'
        style={{ background: isLigth ? "#FFFFFF" : "#282c34" }}
      >
        <h1>
          {timeObj?.hours} : {timeObj?.minutes} : {timeObj?.seconds}
        </h1>

        <p
          className='text-clicker'
          style={{ color: isLigth ? "black" : "white" }}
        >
          Count: {count}
        </p>
        <button className='clicker' onClick={() => setCount((c) => c + 1)}>
          {" "}
          click me!
        </button>
        <button className='white-theme' onClick={() => setIsLigth((c) => true)}>
          Смена темы
        </button>
        <button
          className='black-theme'
          onClick={() => setIsLigth((c) => false)}
        >
          Смена темы
        </button>

        <TextComponent
          ctxEl={"h1"}
          content={"Статья блаблабла"}
          isLigth={isLigth}
        />
        <p>
          <TextComponent
            ctxEl={"desc"}
            content={"Описание статье блабла"}
            isLigth={isLigth}
          />
        </p>
        <TextComponent
          ctxEl={"author"}
          content={"Антонов Ярослав"}
          isLigth={isLigth}
        />
        <TextComponent
          ctxEl={"author"}
          content={"Антонов Ярослав"}
          isLigth={isLigth}
        />
      </div>
    </div>
  );
}

export default App;
