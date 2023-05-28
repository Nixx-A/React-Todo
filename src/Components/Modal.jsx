/* eslint-disable react/prop-types */
import { useState } from 'react'

export function Modal({ addTodo, setTodos }) {
  const [dialog, setDialog] = useState()
  const [value, setValue] = useState('')

  const handleOpenModal = () => {
    const dialog = document.querySelector('#create-dialog')
    dialog.showModal()
    setDialog(dialog)
  }

  const handleClose = () => {
    dialog.close()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const query = new FormData(e.target).get('query')
    addTodo(query)
    dialog.close()
    setValue('')
  }

  return (
    <>
      <dialog
        id='create-dialog'
        className='absolute m-auto w-3/4 h-1/3 md:w-1/3 rounded-md'>
        <div className='flex w-full h-full flex-col justify-center flex-auto items-center '>
          <form onSubmit={handleSubmit} className='text-center'>
            <input
            value={value}
            onChange={e => setValue(e.target.value)}
              name='query'
              type='text'
              className='border-2 border-black rounded-md mb-8'
              placeholder='Buy Cheese...'
            />
          </form>
          <div>
            <button
              className='border-2 rounded-md bg-black text-white p-1 w-32 h-8 text-center'
              onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      </dialog>
      <div className='text-center mb-4'>
        <h2 className='text-center mt-6'>List of things to do! 😄</h2>
        <button className='button-38 mr-4' onClick={handleOpenModal}>
          Create To-Do
        </button>
        <button className='button-38' onClick={() => setTodos([])}>
          Delete All
        </button>
      </div>
    </>
  )
}
