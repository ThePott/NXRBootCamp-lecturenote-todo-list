import React, { useState } from 'react'

const TodoInput = ({ setTodoArray, editingTodo, setEditingTodoId }) => {
    const initialValue = (editingTodo && editingTodo.content) || ""
    const [newContent, setNewContent] = useState("")
    
    const addnewContent = () => {
        if (editingTodo) { 
            editingTodo.content = newContent
            setEditingTodoId(null)

            return 
        }

        const newTodo = {
            id: Number(new Date()),
            content: newContent
        }
    
        setTodoArray((prev) => [...prev, newTodo])
        setNewContent("")
    }

    const buttonText = editingTodo ? `수정하기` : `추가하기`

    return (
        <>
            {editingTodo && `editing todo not`}
            <input type="text" placeholder={initialValue || `할 일`}  value={newContent || initialValue} onChange={(event) => setNewContent(event.target.value)} />
            <button onClick={addnewContent}>{buttonText}</button>
        </>
    )
}

export default TodoInput