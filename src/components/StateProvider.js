// setup data layer
// we need to track the basket

import { createContext, useContext, useReducer } from "react";

// data layer
export const StateContext = createContext()

// provider
export const StateProvider = ( { reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

//this is how you use it inside the component
export const useStateValue = () => useContext(StateContext)
