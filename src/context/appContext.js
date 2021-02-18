import moment from "moment";
import React, { useContext, useState } from "react";

const AppStateContext = React.createContext();
const AppSetStateContext = React.createContext();

export const useAppMoment = () => useContext(AppStateContext);
export const useAppSetMoment = () => useContext(AppSetStateContext);

function AppContext({ children }) {
  const [currentMoment, setCurrentMoment] = useState(moment());
  return (
    <AppStateContext.Provider value={currentMoment}>
      <AppSetStateContext.Provider value={setCurrentMoment}>
        {children}
      </AppSetStateContext.Provider>
    </AppStateContext.Provider>
  );
}

export default AppContext;
