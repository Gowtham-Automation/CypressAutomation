/// <reference types = "Cypress"/>

describe('My Fourth Test Suite', function() {

    it('Handling Visible Element', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#displayed-text').should('be.visible')
      
    })

    it('Handling InVisible Element', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      cy.get('#hide-textbox').click()

      cy.get('#displayed-text').should('not.be.visible')

      cy.get('#show-textbox').click()

      cy.get('#displayed-text').should('be.visible')
    })

  } )