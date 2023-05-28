import { useState } from 'react'
import { FilterTodo } from './FilterToDo'
import { v4 as uuidv4 } from 'uuid'
import { ToDoData } from './ToDoData'
import { Modal } from './Modal'
import { EditTodoModal } from './EditTodoModal'

export function TodoWrapper() {
  const [filteredValue, setFilteredValue] = useState('All')
  const [todos, setTodos] = useState([])

  const addTodo = todo => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false }
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id != id))
  }

  const editTask = (task, id) => {
    console.log(task, id)
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const toogleComplete = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const editTodo = id => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    )
  }

  const filterTodos = () => {
    console.log(filteredValue)
    if (filteredValue === 'All') {
      // Devolver todas las tareas sin filtrar
      return todos
    } else if (filteredValue === 'Complete') {
      // Filtrar solo las tareas completadas
      return todos.filter(todo => todo.completed)
    } else if (filteredValue === 'Incomplete') {
      // Filtrar solo las tareas incompletas
      return todos.filter(todo => !todo.completed)
    }
  }

  const filteredElements = filterTodos()

  return (
    <>
      <FilterTodo
        filterTodos={filterTodos}
        setFilteredValue={setFilteredValue}
      />
      <Modal addTodo={addTodo} setTodos={setTodos} />
      {filteredElements.map(todo =>
        todo.isEditing ? (
          <EditTodoModal key={todo.id} editTask={editTask} task={todo} />
        ) : (
          <ToDoData
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toogleComplete={toogleComplete}
          />
        )
      )}
    </>
  )
}
