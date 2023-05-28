/* eslint-disable react/prop-types */
import { useState } from 'react'

export function EditTodoModal({ editTask, task }) {
  const [value, setValue] = useState(task.task)

  const handleOpenModal = () => {
    const dialog = document.querySelector('#edit-dialog')
    dialog.showModal()
  }

  const handleSubmit = e => {
    e.preventDefault()
    editTask(value, task.id)
  }
  return (
    <>
      <dialog
        open
        id='edit-dialog'
        className='absolute m-auto w-1/3 h-1/3 rounded-md bg-slate-200'>
        <div className='flex w-full h-full flex-col justify-center flex-auto items-center '>
          <form onSubmit={handleSubmit} className='text-center '>
            <input
              name='query'
              value={value}
              onChange={e => setValue(e.target.value)}
              type='text'
              className='border-2 border-black rounded-md mb-8'
              placeholder='Buy Cheese...'
            />
          </form>
        </div>
      </dialog>
      <div className='text-center mb-4'>
        <h2 className='text-center mt-6'>List of things to do! 😄</h2>
        <button className='button-38 mr-4' onClick={handleOpenModal}>
          Create To-Do
        </button>
      </div>
    </>
  )
}
