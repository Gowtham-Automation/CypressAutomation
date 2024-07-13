/// <reference types = "Cypress"/>

//Using - as()

describe('My Second Test Suite', function() {

    it('My First Test Case', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

      //wait() is like Thread.sleep()
      cy.wait(2000)

      cy.get('.search-keyword').type('ca')

      //wait() is like Thread.sleep()
      cy.wait(2000)

      //Code Optimization - using as() we are declaring '.products' element variable name as "product Locator"
      cy.get('.products').as('productLocator')

      //each() To iterating over the array of Web Element. $el - element, index - index
      cy.get('@productLocator').find('.product').each(($el,index,$list) => {

        const textVeg = $el.find('h4.product-name').text()

        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      })

      //Click Cart icon
      cy.get('.cart-icon > img').click()

      //click proceed to cart
      cy.contains('PROCEED TO CHECKOUT').click()

      //click Place order button
      cy.contains('Place Order').click()
      
    })

  } )