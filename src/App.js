function App() {
  //   2. Создайте форму кредитной карты

  //   Что вы узнаете, решив задачу:

  // Как обрабатывать и проверять формы.
  // Научитесь управлять слушателями событий (например, когда поля изменяются, он печатает значения на кредитной карте).
  // Разберётесь с отображением и размещением элементов на странице, особенно данных кредитной карты, которые перекрывают форму.

  return (
    <div>
      <div>
        <div className='card'>
          <h1 className='card-title-bank'>BANK</h1>

          <span>#### #### #### ####</span>

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
    </div>
  );
}

export default App;
