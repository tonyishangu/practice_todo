
import React, {useState} from 'react'

function App() {
  // state to hold todos
  const [todos, setTodos] = useState([])
  // state to manage input
  const [input, setInput] = useState('')
  // state to track which todo is being editted
  const [editId, setEditId] = useState(null)
  // state to filter all || complete || incomplete
  const [filter, setFilter] = useState('all')

  // function to add a todo
  const addTodo = (e) => {
    e.preventDefault()
    if(!input.trim()) return

    const newTodo = {
      id: Date.now(),
      text: input.trim(),
      completed: false
    }

    setTodos([newTodo, ...todos])
    setInput('')
  }

  // function to delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  
  return (
    <>
      
    </>
  )
}

export default App
