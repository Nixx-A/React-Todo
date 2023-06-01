/* eslint-disable no-undef */
import { prettyDOM, render, screen } from '@testing-library/react'
import { ToDoData } from '../src/Components/ToDoData'

it('TodoData', () => {
  render(<ToDoData task={{ task: 'holaa' }} />)
  expect(screen.getByTestId('task-content'))
  console.log(prettyDOM(screen.getByTestId('task-content')))
})
