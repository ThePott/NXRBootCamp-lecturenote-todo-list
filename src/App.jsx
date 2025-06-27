import { useState, useMemo } from 'react'
import TodoList from './components/TodoList'
import dummyData from "./dummy-data.json"
import TodoInput from './components/TodoInput'

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
      <TodoList todoArray={todoArray} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId}/>
      <TodoInput setTodoArray={setTodoArray} editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
    </>
  )
}

export default App