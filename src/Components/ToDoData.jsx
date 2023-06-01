/* eslint-disable react/prop-types */
import { FiEdit } from 'react-icons/fi'
import { AiFillDelete } from 'react-icons/ai'

export function ToDoData({ task, deleteTodo, editTodo, toogleComplete }) {
  return (
    <div className='w-3/4 m-auto dark:text-black'>
      <section className='flex justify-between items-end bg-slate-300 dark:bg-gray-100 shadow-sm overflow-x-hidden rounded-sm'>
        <ul>
          <input
            type='checkbox'
            className='relative top-0.5 rounded-full p-4 ml-2 form-checkbox'
            onClick={() => toogleComplete(task.id)}
          />
          <li className='inline-block'>
            <p data-testid='task-content' className='text-lg ml-2'>{task.task}</p>
          </li>
        </ul>
        <div>
          <FiEdit
            onClick={() => editTodo(task.id)}
            className='text-lg mr-2 inline  cursor-pointer dark:text-black'
          />
          <AiFillDelete
            onClick={() => deleteTodo(task.id)}
            className='text-lg inline mr-1 cursor-pointer dark:text-black'
          />
        </div>
      </section>
    </div>
  )
}
