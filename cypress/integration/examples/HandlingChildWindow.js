/// <reference types = "Cypress"/>

//In Cypress we can't able to switch to child windows. To handle that instead of opening as seperate tab/window we should make window to 
//open in same tab/window. 

//How to achieve this - using Jquery, in run time we should remove attribute "target= "blank". If DOM HTML has "target= "blank" then it will open as new tab

describe('Handling Child Window', function() {

    it('Should handle child window', () => {

      //cy is like a driver, visit() is like get(), get() is like findElements, type is like sendkeys()
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

      //when we execute jquery function we should use invoke()
      cy.get("#opentab").invoke('removeAttr','target').click()

      //In Cypress - In case, if child window domain is different, In that case we need to use origin(,)
      cy.origin("https://www.qaclickacademy.com",()=>{

        cy.get("#navbarSupportedContent a[href*='about']").click()
        cy.get(".mt-50 h2").should('contain','QAClick Academy');

      })
    
    })

  } )