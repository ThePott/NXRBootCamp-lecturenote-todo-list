import { Button, ListItem, Typography, TextField } from '@mui/material'
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
        <ListItem className='gap-3'>

            <TextField 
            label={buttonText} 
            variant="outlined" 
            value={newContent || initialValue} 
            onChange={(event) => setNewContent(event.target.value)} 
            className='grow'
            />

            <Button onClick={addnewContent} variant='outlined' className='h-full'>
                <Typography variant='body1'>
                    {buttonText}
                </Typography>
            </Button>

        </ListItem>
    )
}

export default TodoInput