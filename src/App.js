import { useEffect, useRef, useState } from "react";
import FirstSlide from "./components/slides/first";
import Header from "./components/slides/header";
import SecondSlide from "./components/slides/second";
// import FirstSlide from "./components/slides/second";

function App() {
  const [activeSpanHeader, setActiveSpanHeader] = useState(1);

  const [first, setFirst] = useState({});
  const [second, setSecond] = useState({});
  const [third, setThird] = useState({});
  const [four, setFour] = useState({});

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
        ]}
      />
      <FirstSlide stateRef={first} setStateRef={setFirst} />
      <SecondSlide stateRef={second} setStateRef={setSecond} />
      <SecondSlide stateRef={third} setStateRef={setThird} />
      <SecondSlide stateRef={four} setStateRef={setFour} />
    </div>
  );
}

export default App;
