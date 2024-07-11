/// <reference types = "Cypress"/>

describe('My First Test Suite', function() {

    it('My First Test Case', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

      //wait() is like Thread.sleep()
      cy.wait(2000)

      cy.get('.search-keyword').type('ca')

      //wait() is like Thread.sleep()
      cy.wait(2000)

      //Assertion. :visible is Jquery(javascript library)
      cy.get('.product:visible').should('have.length',4)

      //Parent child chaining. It will search & return .product descendant of .products child elements
      cy.get('.products').find('.product').should('have.length',4)

      //eq(2) is to select index from the list
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
      
    })

  } )