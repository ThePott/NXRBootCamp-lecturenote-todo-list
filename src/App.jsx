import { useMemo, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import dummyData from "./dummy-data.json"
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

const App = () => {
  const [todoArray, setTodoArray] = useState(dummyData)
  const [editingTodoId, setEditingTodoId] = useState(null)

  const editingTodo = useMemo(
    () => {
      if (editingTodoId === null) { return null }
      const editingTodo = todoArray.find((todo) => todo.id === editingTodoId)
      return editingTodo
    },
    [editingTodoId]
  )

  return (
    <>
      <Container
        disableGutters
        className='max-w-md w-full h-[600px] flex flex-col justify-end'
      >
        <Paper
          elevation={24}
          variant='outlined'
          className='max-w-md w-full h-[600px] flex flex-col justify-end p-6 m-0 rounded-[48px]'>
          <TodoList todoArray={todoArray} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId} />
          <TodoInput setTodoArray={setTodoArray} editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
        </Paper>
      </Container>
    </>
  )
}

export default App