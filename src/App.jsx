import { useState } from 'react'
import './App.css'
import { Header } from './Components/Header'
import { TodoWrapper } from './Components/TodoWrapper'

function App() {
  const [darkTheme, setDarkTheme] = useState(false)
  return (
    <main className={darkTheme ? 'dark' : ''}>
      <div className=' bg-[aliceblue] dark:bg-gray-900 h-screen w-screen dark:text-white overflow-hidden'>
        <Header setDarkTheme={setDarkTheme} darkTheme={darkTheme} />
        <TodoWrapper />
        
      </div>
    </main>
  )
}

export default App
