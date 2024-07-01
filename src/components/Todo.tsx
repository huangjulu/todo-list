import { useState } from 'react'

interface Todo {
  id: number;
  content: string;
  isDone: boolean;
}

const Todo: React.FC = () =>{
  const [todos, setTodos] = useState<Todo[]>([])
  const [inputVal, setInputVal] = useState<Todo["content"]>("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if(inputVal === "") return

    const newTodo: Todo = {
      id: todos.length + 1,
      content: inputVal,
      isDone: false,
    }
    setTodos (prev => [...prev, newTodo])
    setInputVal("")
  }

  const handleDone = (id:number) => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return(
    <div className='container'>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit} className='form'>
        <input 
          type="text" 
          onChange={(e) => setInputVal(e.target.value)}
          value={inputVal}
          className='form__input'
          placeholder='Remember to ...'
        />
        <button type="submit" className='form__button'> + Add </button>
      </form>
      <ul className='todo'>
        {todos.map(todo => (
          <li key={todo.id} className='todo__list'>
            <p>{todo.content}</p>
            <button onClick={()=>handleDone(todo.id)} className='todo__button'>
              Done
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Todo

