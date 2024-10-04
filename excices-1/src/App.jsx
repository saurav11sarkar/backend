import './App.css'
import AppName from './AppName'
import AppTodo from './AppTodo'
import TodoItem1 from './TodoItem1'
import TodoItem2 from './TodoItem2'

function App() {

  return (
    <div>
      <div className='lg:max-w-screen-md lg:m-auto'>
        <div className='border-2 border-sky-300 rounded-xl p-6 bg-slate-400 shadow-md'>

          {/* Nmae Of app */}
          <AppName></AppName>

          {/* First task */}
          <AppTodo></AppTodo>

          {/* Secend task */}
          <TodoItem1></TodoItem1>

          {/* Thered task */}
          <TodoItem2></TodoItem2>

        </div>
      </div>
    </div>
  )
}

export default App
