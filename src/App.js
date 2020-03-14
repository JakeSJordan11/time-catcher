import React, { useEffect, useState } from "react";
import GlobalStyles from "./styled-components/GlobalStyles";
import StyledWindow from "./styled-components/StyledWindow";

const App = () => {
  const Time = new Date().toLocaleTimeString();

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(passingTime => passingTime + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <StyledWindow>{Time}</StyledWindow>
    </>
  );
};

export default App;
