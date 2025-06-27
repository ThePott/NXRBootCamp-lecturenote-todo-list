import { useState, useMemo } from "react"
import dummyData from "./dummy-data.json"
import { createContext, useContext } from "react"

const StateValueContext = createContext()
const StateSetterContext = createContext()

const StateProvider = ({ children }) => {
    const [todoArray, setTodoArray] = useState(dummyData)
    console.log("---- todoArray changed:", todoArray)


    return (
        <StateSetterContext.Provider value={setTodoArray}>
            <StateValueContext.Provider value={todoArray}>
                {children}
            </StateValueContext.Provider>
        </StateSetterContext.Provider>
    )
}

const useStateValueContext = () => useContext(StateValueContext)

const useStateSetterContext = () => useContext(StateSetterContext)

export { StateProvider, useStateValueContext, useStateSetterContext }