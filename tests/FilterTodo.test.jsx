/* eslint-disable no-undef */
import { render, screen } from '@testing-library/react'
import { FilterTodo } from '../src/Components/FilterToDo'

describe('FilterTodos', () => {
  it('chech if render all the button text', () => {
    render(<FilterTodo />)
    expect(screen.getByText('All'))
    expect(screen.getByText('Complete'))
    expect(screen.getByText('Incomplete'))
  })
})

/*  const setFilteredValue = vi.fn()
 const useStateSpy = vi.spyOn(React, 'useState')
 render(<FilterTodo setFilteredValue={setFilteredValue} />)


 useStateSpy.mockImplementation((init) => [init,  setFilteredValue])
 const button = screen.getByText('All')
 fireEvent.click(button)
 expect(setFilteredValue).toHaveBeenCalled(1) */
