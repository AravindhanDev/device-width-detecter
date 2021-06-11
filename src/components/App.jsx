import React, { useEffect, useState } from "react";

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  const handleWidthResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const handleHeightResize = () => {
    setWindowHeight(prevValue => {
      return window.innerHeight
    })
  };

  useEffect(() => {
    window.addEventListener("resize", handleWidthResize);

    return () => {
      window.removeEventListener("resize", handleWidthResize);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleHeightResize);

    return () => {
      window.removeEventListener("resize", handleHeightResize);
    };
  }, []);

  return (
    <div>
      <h1 class="width">{windowWidth}x{windowHeight}</h1>
    </div>
  );
};

export default App;
