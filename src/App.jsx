import React from 'react'
import './App.css'
import { StateProvider, useStateValueContext, useStateSetterContext } from './hooks'

const Todo = ({ todoId, todoContent }) => {
  const setTodoArray = useStateSetterContext()

  const deleteCurrentTodo = () => {
    setTodoArray((prev) => {
      const filteredTodoArray = prev.filter((todo) => todo.id !== todoId)
      return filteredTodoArray
    })
  }
  
  console.log("---- re-rendering todo:", todoContent)
  return (
    <li>
      {todoContent}
      <button onClick={deleteCurrentTodo}>삭제</button>
    </li>
  )
}

const MemoizedTodo = React.memo(Todo)

const TodoList = () => {
  const context = useStateValueContext()
  const todoArray = context

  console.log("---- re-rendering todo list:", todoArray)
  if (!todoArray) { return null }
  return (
    <ul>
      {todoArray.map((todo) => <MemoizedTodo key={todo.id} todoId={todo.id} todoContent={todo.content} />)}
    </ul>
  )
}

const App = () => {
  return (
    <>
      {/* // 앱의 자식으로 연결된 컴포넌트들은 모두 같은 State을 공유한다. */}
      <StateProvider>
        <TodoList />
      </StateProvider>
    </>
  )
}

export default App