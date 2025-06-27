import { useState } from "react"
import dummyData from "./dummy-data.json"
import { createContext, useContext } from "react"

const StateContext = createContext()

const StateProvider = ({children}) => {
    const [todoArray, setTodoArray] = useState(dummyData)
    
    return (
        <StateContext.Provider value={{ todoArray, setTodoArray }}>
            {children}
        </StateContext.Provider>
    )
}

const useAppStateContext = () => {
    const context = useContext(StateContext)
    if (!context) {
        throw new Error('useAppState must be used within StateProvider');
    }
    
    return context
}

export { StateContext, StateProvider, useAppStateContext }