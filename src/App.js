function App() {
  return <div className="slide">
    <div className="container">
      <div className="header">
        <div className="over_header__rad-block">
        <div class="header_rad-block">
          <h1>F U
              D O
          </h1>
        </div>
        <h1>Fudo</h1>
        </div>
        <div className="header_menu"> 
        <p className='cursor-p'>Services</p>
        <p className='cursor-p'>Why Fudo?</p>        
        <p className='cursor-p'>Menu</p>
        <p className='cursor-p'>Contact</p>
        </div>
        <div className="header_opportunities">
          <img className="magnifier"/><svg width="25" height="25" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19.2502 19.25L15.138 15.1305L19.2502 19.25ZM17.4168 9.62498C17.4168 11.6915 16.5959 13.6733 15.1347 15.1345C13.6735 16.5957 11.6916 17.4166 9.62516 17.4166C7.55868 17.4166 5.57684 16.5957 4.11562 15.1345C2.6544 13.6733 1.8335 11.6915 1.8335 9.62498C1.8335 7.5585 2.6544 5.57666 4.11562 4.11544C5.57684 2.65422 7.55868 1.83331 9.62516 1.83331C11.6916 1.83331 13.6735 2.65422 15.1347 4.11544C16.5959 5.57666 17.4168 7.5585 17.4168 9.62498V9.62498Z" stroke="black" stroke-width="2" stroke-linecap="round"/>
          </svg>

          <img className="shop"/><svg width="25" height="25" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M2.64528 9.02004C2.68215 8.56061 2.89072 8.13193 3.22945 7.81936C3.56818 7.50679 4.01221 7.33328 4.47311 7.33337H15.5263C15.9872 7.33328 16.4312 7.50679 16.7699 7.81936C17.1087 8.13193 17.3172 8.56061 17.3541 9.02004L18.0902 18.1867C18.1104 18.439 18.0782 18.6927 17.9956 18.9319C17.913 19.1711 17.7818 19.3906 17.6101 19.5766C17.4385 19.7626 17.2303 19.911 16.9985 20.0126C16.7667 20.1142 16.5164 20.1666 16.2633 20.1667H3.73611C3.48304 20.1666 3.23273 20.1142 3.00093 20.0126C2.76913 19.911 2.56087 19.7626 2.38925 19.5766C2.21764 19.3906 2.08639 19.1711 2.00377 18.9319C1.92115 18.6927 1.88895 18.439 1.9092 18.1867L2.64528 9.02004V9.02004Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
           <path d="M13.6663 10.0834V5.50004C13.6663 4.52758 13.28 3.59495 12.5924 2.90732C11.9048 2.21968 10.9721 1.83337 9.99967 1.83337C9.02721 1.83337 8.09458 2.21968 7.40695 2.90732C6.71932 3.59495 6.33301 4.52758 6.33301 5.50004V10.0834" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
          <div className="login cursor-p"><p>login</p></div>
        </div>
      </div>
         <div>
         <div className="More-then-Faster ">
          <a className='cursor-p'>More then Faster</a>
          <img src='./cherry.svg'/>
         </div>
          <h3 className="fat-text">Be The Fastest In Delivering Your <span className='color-red'>Food</span></h3>
          <p className="fat-text_description">Our job is to filling your tummy with delicious food
             and  with fast and free delivery</p>
             <div className="flex-row">
             <button className="login cursor-p">Get Started</button>
             <button className="white-button"><div></div>Watch Video</button>
             </div>
         </div>
         <div className="Icons">
          <img src={require('./Ellipse 3.png')} />
          <img className='women' src={require('./women.png')} />
          <div className='time'>
            <img src='./time.svg'/>
          </div>
          <div className='Rechard-Watson'>
            <div className='Rechard-Watson-img'>
              <img src=''/>
            </div>
            <span>Rechard Watson</span>
            <span>Food Courier</span>
            <div className='phone-lap cursor-p'>
              <img src=''/>
            </div>
          </div>
          <div className='delivery'>
            <p>Italian Pizza</p>
            <p><span className='color-red'>$</span>7.49</p>
          </div>
         </div>
    </div>
  </div>;
}

export default App;
