
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
  // function to mark a todo as complete
  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        todo.id === id ? { ...todo, completed: !todo.completed}: todo
      })
    )
  }

  // funtion to edit
  const editTodo = (id) => {
    const todo = todos.filter((t) => t.id === id)
    setEditId(id)
    setInput(todo.text)
  }

  // function to save the editted todo
  const saveTodo = (e) => {
    e.preventDefault()
    setTodos(todos.map((todo) => {
      todo.id === editId ? { ...todo, text: input} : todo
    }))
  }
  // filtering todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed
    if (filter === 'incomplete') return !todo.complete
    return true
  })
  return (
    <>
      
    </>
  )
}

export default App

const styles = {
  container: {
    maxWidth: '500px',
    padding: '40px auto',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    background: 'fff',
    fontFamily: 'cursive'
  },
  title: {
    textAlign: 'center'
  },
  form: {
    display: 'flex',
    gap: '10px'
  },
  input: {
    flex: 1,
    padding: '8px'
  },
  button: {
    padding: '8px 16px'
  },
  filters: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '10px 0'
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  todoItem: {
    display: 'flex',
    justifyContent: 'space between',
    alignItems: 'center',
    padding: '10px',
    borderBottom: '1px solid #eee',
    cursor: 'pointer'
  },
  editBtn: {
    marginRight: '5px'
  },
  deleteBtn: {
    color: 'red'
  },
}