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

          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography component="span">Completed</Typography>
            </AccordionSummary>
            <AccordionDetails>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
              <TodoList todoArray={groupedResult.completed} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId} />
            </AccordionDetails>
          </Accordion>

          <TodoList todoArray={groupedResult.ongoing} setTodoArray={setTodoArray} editingTodoId={editingTodoId} setEditingTodoId={setEditingTodoId} />
          <TodoInput setTodoArray={setTodoArray} editingTodo={editingTodo} setEditingTodoId={setEditingTodoId} />
        </Box>
      </Box>
    </>
  )
}

export default App