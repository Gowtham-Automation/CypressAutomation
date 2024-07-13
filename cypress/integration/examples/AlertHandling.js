/// <reference types = "Cypress"/>

//Using - as()

describe('My Third Test Suite', function() {

    it('Handle Alert', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //Cypress auto accepts alerts and popup
      cy.get('#alertbtn').click()
      cy.get('[value="Confirm"]').click()

      //window:alert is Keyevent. To handle keyevent we need cy.on(). Fetch String value 
      //Cypress have capability of browser events. window:alert is the event which get fired on alert open
      //so you are firing the event through cypress to get access to that alert
      cy.on('window:alert',(str) =>
      {
        //Mocha
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
      }
      )

      //window:alert is Keyevent to fetch string value from confirm alert
      cy.on('window:confirm',(str) =>
      {
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
      })
    
    })

  } )