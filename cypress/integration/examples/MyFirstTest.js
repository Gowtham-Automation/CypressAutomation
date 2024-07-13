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

      //Parent child chaining. find() It will search & return .product descendant of .products
      cy.get('.products').find('.product').should('have.length',4)

      //eq(2) is to select index from the list
      cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()

      //each() To iterating over the array of Web Element. $el - element, index - index
      cy.get('.products').find('.product').each(($el,index,$list) => {

        //Each iteration from $el featch particular element and compare it's expected.
        //h4.product-name - tagName.classname. text() is a Jquery command return the text of the selected element. Not cypress commands
        const textVeg = $el.find('h4.product-name').text()

        if(textVeg.includes('Cashews')){
          cy.wrap($el).find('button').click()
        }
      })

      //This is to Assert Brand Name value
      cy.get('.brand').should('have.text','GREENKART')

      //when promise is resolved for cy.get('.brand') then the resolved variable fall as argument variable "logoelement"
      //We can't stor webElement as variable in Cypress. Cypress get confuse. To achienve that use then() after promise resolved it will execute next line of code
      //If we use cypress methods(ex: get(), type()) for concat means we won't face promise issue. Ex: cy.get('.search-keyword').type('ca')

      //Non cypress commands cannnot resolve promise by themselves
      //Below const is a JS var type. so cypress will confuse. To handle this we have to use then() manually.
      
      //const logo = cy.get('.brand')
      //cy.log(logo.text())

      //This is to print brand name in log
      cy.get('.brand').then(function(logoelement){
        cy.log(logoelement.text())
      })
      
    })

  } )