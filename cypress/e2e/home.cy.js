/// <reference types="cypress" />

describe('to-do vue app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('First item renders text (delectus aut autem)', () => {
    cy.get('.v-list > :nth-child(1) > :nth-child(1)').contains(
      'delectus aut autem'
    )
  })
  it('First item renders checkbox', () => {
    cy.get('.v-list > :nth-child(1) > :nth-child(1)').find(
      'input[type=checkbox]'
    )
  })
  it('There are 10 items', () => {
    cy.get('.v-list > div > div').should('have.length', 10)
  })
})
