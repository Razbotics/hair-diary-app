import moment from "moment";
import React, { useContext, useReducer, useState } from "react";
import { initialState, reducer } from "../store/reducer";

const AppStateContext = React.createContext();
const AppDispatchContext = React.createContext();

export const useAppState = () => useContext(AppStateContext);
export const useAppDispatcher = () => useContext(AppDispatchContext);

function AppContext({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
}

export default AppContext;
