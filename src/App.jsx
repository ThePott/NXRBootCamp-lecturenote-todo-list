import './App.css'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import { StateProvider } from './hooks'



const App = () => {
  return (
    <>
      {/* // 앱의 자식으로 연결된 컴포넌트들은 모두 같은 State을 공유한다. */}
      <StateProvider>
        <TodoList />
        <TodoInput />
      </StateProvider>
    </>
  )
}

export default App