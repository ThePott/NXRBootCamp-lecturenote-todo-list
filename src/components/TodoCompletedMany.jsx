import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Checkbox, ListItem, ListItemText } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

const CompletedTodo = ({ setTodoArray, todo }) => {
  const handleUncheck = (event) => {
    todo["completed"] = event.target.checked
    setTodoArray((prev) => [...prev])
  }

  return (
    <>
      <ListItem key={todo.id}>
        <Checkbox defaultChecked onChange={handleUncheck} />
        <ListItemText primary={todo.content} />
      </ListItem>
    </>
  )
}

const TodoCompletedMany = ({ setTodoArray, completedTodoArray }) => {
  if (!completedTodoArray) { return null }
  return (
    <>
      <Accordion disableGutters className='p-0'>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Completed</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ padding: 0 }}>
          {completedTodoArray.map((todo) => (
            <CompletedTodo key={todo.id} setTodoArray={setTodoArray} todo={todo} />
          ))}


        </AccordionDetails>
      </Accordion>
    </>
  )
}

export default TodoCompletedMany