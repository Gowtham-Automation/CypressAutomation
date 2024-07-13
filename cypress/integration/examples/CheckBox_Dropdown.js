/// <reference types = "Cypress"/>

//Using - as()

describe('My Third Test Suite', function() {

    it('Handling Check Box', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //Click checkbox and validate whether it got checked. and('have.value') - here value is attribute. 
      //we are validating Value attribute valuw with expected
      cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

      cy.wait(1000)

      //uncheck checkbox
      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      //Select Multiple check box by sending Values in array
      cy.get('input[type="checkbox"]').check(['option2','option3'])
      
    })


    it('Handling Radio Button', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //Click checkbox and validate whether it got checked. and('have.value') - here value is attribute. 
      //we are validating Value attribute valuw with expected
      cy.get('input[value="radio2"]').check().should('be.checked').and('have.value','radio2')

      cy.wait(1000)
      
    })


    it('Handling Static Dropdown', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //using select() we are passing 'option2' value to select
      cy.get('select').select('option2').should('have.value','option2')
    })


    it('Handling Dynamic Dropdown', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //Type 'ind' in dropdown
      cy.get('#autocomplete').type('ind')

      //using each() iterate element 
      cy.get('.ui-menu-item div').each(($el,index,$list) =>
      {
          if($el.text() === "India"){
            cy.wrap($el).click()
          }
      })

      //assert India value is selected
      cy.get('#autocomplete').should('have.value','India')
    })

  } )