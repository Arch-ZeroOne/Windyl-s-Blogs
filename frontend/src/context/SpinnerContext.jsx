import React, { useState, useContext } from "react";
const SpinningContext = React.createContext();

export function useSpinner() {
  return useContext(SpinningContext);
}

function SpinnerContext({ children }) {
  const [spinning, setSpinning] = useState(false);
  return (
    <SpinningContext.Provider value={{ spinning, setSpinning }}>
      {children}
    </SpinningContext.Provider>
  );
}

export default SpinnerContext;
