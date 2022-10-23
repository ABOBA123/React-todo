import { useEffect, useRef, useState } from "react";
import FirstSlide from "./components/slides/first";
import Header from "./components/slides/header";
import SecondSlide from "./components/slides/second";
import ThirdSlide from "./components/slides/third";
import FourthSlide from "./components/slides/fourth";
import FifthSlide from "./components/slides/fifth";
import BesementSlide from "./components/slides/besement";
// import FirstSlide from "./components/slides/second";

function App() {
  const [activeSpanHeader, setActiveSpanHeader] = useState(1);

  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [four, setFour] = useState({});
  const [fifth, setFifth] = useState({});
  const [besement,setbesement] = useState({});
  // console.log(first?.current?.clientHeight, second?.current?.clientHeight);

  return (
    <div>
      <Header
        activeSpan={activeSpanHeader}
        setActiveSpan={setActiveSpanHeader}
        heigths={[
          first?.current?.clientHeight,
          second?.current?.clientHeight,
          third?.current?.clientHeight,
          four?.current?.clientHeight,
          fifth?.current?.clientHeight,
        ]}
      />
      <FirstSlide stateRef={first} setStateRef={setFirst} />
      <SecondSlide stateRef={second} setStateRef={setSecond} />
      <ThirdSlide stateRef={third} setStateRef={setThird}/>
      <FourthSlide stateRef={four} setStateRef={setFour}/>
      <FifthSlide stateRef={fifth} setStateRef={setFour}/>
      <BesementSlide stateRef={besement} setStateRef={setbesement}/>
    </div>
  );
}

export default App;
