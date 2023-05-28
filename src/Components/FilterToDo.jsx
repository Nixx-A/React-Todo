export function FilterTodo({ setFilteredValue }) {
  const handleClick = e => {
    const valueToFilter = e.target.innerHTML
    setFilteredValue(valueToFilter)
  }
  return (
    <section className='mt-8 text-black'>
      <ul className='flex justify-center items-center flex-row p-2'>
        <button className='bg-gray-100 p-1.5 hover:bg-gray-200  text-center focus:bg-gray-200 rounded-l-md w-1/5 shadow-sm duration-200'>
          <li className='' value='asdasdasds' onClick={handleClick}>
            All
          </li>
        </button>
        <button className='bg-gray-100 p-1.5 hover:bg-gray-200  focus:bg-gray-200 text-center shadow-sm w-1/4 duration-200'>
          <li className='' onClick={handleClick}>
            Complete
          </li>
        </button>
        <button className='bg-gray-100 p-1.5 hover:bg-gray-200 focus:bg-gray-200 rounded-r-md text-center w-1/5 shadow-sm duration-200'>
          <li className='' onClick={handleClick}>
            Incomplete
          </li>
        </button>
      </ul>
    </section>
  )
}
