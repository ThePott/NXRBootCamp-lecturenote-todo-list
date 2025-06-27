import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import dummyData from "./dummy-data.json"
import { StateProvider, useAppStateContext } from './hooks'

const Todo = ({ todo }) => {
  // const { todoArray, setTodoArray } = useAppStateContext()
  // console.log("---- re-rendering todo:", todo.content)

  // const deleteCurrentTodo = () => {
  //   const filteredTodoArray = todoArray.filter((remaining) => remaining.id !== todo.id)
  //   setTodoArray(filteredTodoArray)
  // }
  const { setTodoArray } = useAppStateContext()
  console.log("---- re-rendering todo:", todo.content)

  const deleteCurrentTodo = () => {
    setTodoArray((prev) => {
      const filteredTodoArray = prev.filter((remaining) => remaining.id !== todo.id)
      return filteredTodoArray
    })
  }

  return (
    <li>
      {todo.content}
      <button onClick={deleteCurrentTodo}>삭제</button>
    </li>
  )
}

const TodoList = () => {
  const { todoArray } = useAppStateContext()
  console.log("---- re-rendering todo list")
  if (!todoArray) { return null }
  return (
    <ul>
      {todoArray.map((todo) => <Todo key={todo.id} todo={todo} />)}
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
