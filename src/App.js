import React, { useEffect, useState } from "react";
import GlobalStyles from "./styled-components/GlobalStyles";

const App = () => {
  const Time = new Date().toLocaleTimeString();

  const [time, setTime] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setTime(time => time + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);

  return (
    <>
      <GlobalStyles />
      <div
        style={{
          height: "100vh",
          display: "grid",
          justifyContent: "center",
          alignContent: "center",
          fontSize: "200px",
          textShadow: "0px 10px #A83294",
          color: "#20C9C9"
        }}
      >
        {Time}
      </div>
    </>
  );
};

export default App;
