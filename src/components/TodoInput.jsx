import React, { useState } from 'react'

const TodoInput = ({ setTodoArray, editingTodo }) => {
    const [newContent, setNewContent] = useState("")
    
    const addnewContent = () => {
        const newTodo = {
            id: Number(new Date()),
            content: newContent
        }
    
        setTodoArray((prev) => [...prev, newTodo])
    }

    return (
        <>
            {editingTodo && `editing todo not`}
            <input type="text" onChange={(event) => setNewContent(event.target.value)} />
            <button onClick={addnewContent}>추가하기</button>
        </>
    )
}

export default TodoInput