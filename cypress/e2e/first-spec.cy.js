/* eslint-disable no-undef */
describe('App', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
  })


  it('dark mode', () => {
    cy.get('[aria-label="change theme"]').click()
  })

  it('light theme', () => {
    cy.get('[aria-label="change theme"]').click().click()
  })

  it('create todo', () => {
    cy.contains('Create To-Do').click()
    cy.get('#create-dialog').get('[placeholder="Buy Cheese..."]').type('Buy milk {enter}')


  })
})

describe('todos functionality', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
    cy.contains('Create To-Do').click()
    cy.get('#create-dialog').get('[placeholder="Buy Cheese..."]').type('Buy milk {enter}')
    cy.contains('Create To-Do').click()
    cy.get('#create-dialog').get('[placeholder="Buy Cheese..."]').type('Go to the super {enter}')
    cy.get(':nth-child(5) > .flex > ul > .relative').check()
  })

  it('Filter all todos', () => {
    cy.contains('All').click()
  })

  it('Filter complete todos', () => {
    cy.contains('Complete').click()
  })

  it('Filter incomplete todos', () => {
    cy.contains('Incomplete').click()
  })

  it('Delete all todos', () => {
    cy.contains('Delete All').click()
  })


})
