// context.jsx
import { createContext, useContext, useReducer } from "react";

import reducer from "./Reducer";
import { Actions } from "./Reducer";

const INITIAL_STATE = {};
export const StoreProvider = createContext();
export const useStore = () => useContext(StoreProvider);
export const ContextProvider = ({ children }) => {
  const [products, dispatch] = useReducer(reducer, "products", INITIAL_STATE);
  return (
    <StoreProvider.Provider
      value={{
        ...Actions,
        dispatch,
      }}
    >
      {children}
    </StoreProvider.Provider>
  );
};
