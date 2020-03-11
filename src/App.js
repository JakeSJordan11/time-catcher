import React, { useEffect } from "react";
import GlobalStyles from "./styled-components/GlobalStyles";

const App = () => {
  const Time = new Date().toLocaleTimeString();
  return (
    <>
      <GlobalStyles />
      <div
        style={{
          display: "grid",
          fontSize: "50px",
          margin: 0,
          padding: 0,
          justifyContent: "center"
        }}
      >
        {Time}
      </div>
    </>
  );
};

export default App;
