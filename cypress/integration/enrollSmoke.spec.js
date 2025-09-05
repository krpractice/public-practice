

/// <reference types="cypress" />

//Login with known user and access My Awesome Course
it('Login Zeachable & Access My Awesome Course', () => {
    cy.visit('https://takehome.zeachable.com/')

    cy.get('.navbar-link').click()
    cy.get('#email').type('kj@test.com')
    cy.get('#password').type('123test')
    cy.get('[data-testid="login-button"]').click()
    cy.log('User Successfully Logged In******************************')
    cy.get('.course-listing-title').contains('My Awesome Course').click()
    cy.contains('My Awesome Course')
    cy.log('User Successfully Access Course******************************')
  })

  //Sign Up and Enroll in My Awesome as new user
  it('Sign Up & Enroll In My Awesome Course', () => {
   
    cy.visit('https://takehome.zeachable.com/')

    cy.get('#header-sign-up-btn').click()
    cy.get('#user_name').type('AUTOMATION TESTER')
    const uuid = () => Cypress._.random(0, 1e6)
    const id = uuid()
    const email = `autoemail${id}@gmail.com`
    cy.get('#user_email').type(email)
    cy.get('#password').type('123test')
    cy.get('[data-testid="signup-button"]').click()
    cy.get('.course-listing-title').contains('My Awesome Course').click()
    cy.get('#enroll-button').click()
    cy.contains('Thanks for enrolling in this course!')
    cy.get('.btn').click()
    cy.contains('My Awesome Course')
    cy.log('User Successfully Enrolled In Course******************************')
  }) 