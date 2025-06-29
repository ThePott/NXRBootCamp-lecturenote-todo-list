import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import { useMemo, useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import dummyData from "./dummy-data.json";
import TodoCompletedMany from './components/TodoCompletedMany';

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


  const groupedResult = Object.groupBy(
    todoArray,
    (todo) => todo.completed === true ? "completed" : "ongoing",
  );

  return (
    <>
      <Box
        className='max-w-md w-full mx-auto h-[600px] flex flex-col justify-end rounded-[48px] border-1 border-zinc-300'
      >
        <Box
          className='max-w-md w-full h-[600px] flex flex-col justify-end p-6 m-0 rounded-[48px]'>

          <TodoCompletedMany setTodoArray={setTodoArray} completedTodoArray={groupedResult.completed} />

          <TodoList todoArray={groupedResult.ongoing} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId} />
          <TodoInput setTodoArray={setTodoArray} editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
        </Box>
      </Box>
    </>
  )
}

export default App