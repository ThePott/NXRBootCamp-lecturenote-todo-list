import { useState } from 'react'
import { useStateSetterContext } from '../hooks'

const TodoInput = () => {
    const setTodoArray = useStateSetterContext()
    const [newTodoContent, setNewTodoContent] = useState("")

    const addNewTodo = () => {
        setTodoArray((prev) => {
            const newTodo = {
                id: Number(new Date()),
                content: newTodoContent
            }
            const newTodoArray = [...prev, newTodo]
            return newTodoArray
        })
    }

    return (
        <>
            <input type="text" placeholder='할 일' onChange={(event) => setNewTodoContent(event.target.value)}/>
            <button onClick={addNewTodo}>추가하기</button>
        </>
    )
}

export default TodoInput