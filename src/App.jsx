import { useMemo, useState } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import dummyData from "./dummy-data.json"
import Container from '@mui/material/Container';
import { Paper, Box } from '@mui/material';

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
      <Box
        className='max-w-md w-full mx-auto h-[600px] flex flex-col justify-end rounded-[48px] border-1 border-zinc-300'
      >
        <Box
          className='max-w-md w-full h-[600px] flex flex-col justify-end p-6 m-0 rounded-[48px]'>
          <TodoList todoArray={todoArray} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId} />
          <TodoInput setTodoArray={setTodoArray} editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
        </Box>
      </Box>
    </>
  )
}

export default App