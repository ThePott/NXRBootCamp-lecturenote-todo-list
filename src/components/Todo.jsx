import React from "react"
import { useStateSetterContext } from "../hooks"

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

export default MemoizedTodo