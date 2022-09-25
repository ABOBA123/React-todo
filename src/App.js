import {usestate,useEffect, useRef} from "react";
import ReactDOM from "react-dom/client";
function App() {
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    previousInputValue.current = inputValue;
  }, [inputValue]);
  //   2. Создайте форму кредитной карты

  //   Что вы узнаете, решив задачу:

  // Как обрабатывать и проверять формы.
  // Научитесь управлять слушателями событий (например, когда поля изменяются, он печатает значения на кредитной карте).
  // Разберётесь с отображением и размещением элементов на странице, особенно данных кредитной карты, которые перекрывают форму.

  return (
    <div>
        <div className="over_input-panel">
        <div className="input-panel">
          <p>Card number</p>
           <input
        type="text"
        value={inputValue}
      />
          <p>Card Name</p>
          <input></input>
          <p>Expiation Date</p>
          <div className="Expiation-Date">
          <input>Month</input>
          <input>Year</input>
          <input>Cw</input>
          </div>
          <button>Submit</button>
        </div>
        </div>
        <div className='card'>
          <h1 className='card-title-bank'>BANK</h1>

          <span>####  #### #### ####{inputValue}</span>

          <div className='user-info'>
            <div>
              <span>Card Holder</span>
              <h3>######</h3>
            </div>

            <div>
              <span>Expires</span>
              <h3>## / ##</h3>
            </div>
          </div>
        </div>
        <div>{/* Твоя вёрстка с данными карты тут */}</div>
      
    </div>
  );
}

export default App;
