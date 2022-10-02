import { useEffect, useRef, useState } from "react";
import FirstSlide from "./components/slides/first";
import Header from "./components/slides/header";

function App() {
  const [activeSpanHeader, setActiveSpanHeader] = useState(1);

  return (
    <div>
      <Header
        activeSpan={activeSpanHeader}
        setActiveSpan={setActiveSpanHeader}
      />
      <FirstSlide />
      {/* <SacondSlide /> */}
    </div>
  );
}

export default App;
