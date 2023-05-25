//React Context, smaller version of Redux

import React, { createContext, useContext, useReducer } from "react";

export const DataLayerContext = createContext();

export const DataProvider = ({ initialState, reducer, children }) => (
  <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </DataLayerContext.Provider>
);

export const useDataProviderValue = () => useContext(DataLayerContext);
