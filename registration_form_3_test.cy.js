beforeEach(() => {
    cy.visit('cypress/fixtures/registration_form_3.html')
    
})


describe('Visual Test for Reg. Form 3', () => {
    


    it('should render all form fields and buttons', () => {
        // Check if the Name input field exists
        cy.get('input[name="name"]').should('be.visible');
    
        // Check if the Email input field exists
        cy.get('input[name="email"]').should('be.visible');
    
        // Check if the Country dropdown exists
        cy.get('select#country').should('be.visible');
    
        // Check if the City dropdown exists
        cy.get('select#city').should('be.visible');
    
        // Check if the Birthday input field exists
        cy.get('input#birthday').should('be.visible');
    
        // Check if the newsletter frequency radio buttons exist
        cy.get('input[type="radio"][value="Daily"]').should('be.visible');
        cy.get('input[type="radio"][value="Weekly"]').should('be.visible');
        cy.get('input[type="radio"][value="Monthly"]').should('be.visible');
        cy.get('input[type="radio"][value="Never"]').should('be.visible');
    
        // Check if the file upload input exists
        cy.get('input[type="file"]').should('be.visible');
    
        // Check if the submit button exists
        cy.get('button[type="submit"]').should('be.visible');
    
        // Check if the privacy policy checkbox exists
        cy.get('input[type="checkbox"]').first().should('be.visible');
      });
    
      it('should render error messages on invalid input', () => {
        // Focus and blur the Email field without input to trigger validation
        cy.get('input[name="email"]').focus().blur();
        
        // Check if the email alert appears
        cy.get('#emailAlert').should('contain', 'Email is required'); 
    
})
})
/*
BONUS TASK: add visual tests for registration form 3
Task list:
* Create test suite for visual tests for registration form 3 (describe block)
* Create tests to verify visual parts of the page:
    * radio buttons and its content
    * dropdown and dependencies between 2 dropdowns:
        * list of cities changes depending on the choice of country
        * if city is already chosen and country is updated, then city choice should be removed
    * checkboxes, their content and links
    * email format
 */

describe('Functional Test for Reg. Form 3', () => {
    


it('should fill out and submit the form successfully', () => {

    // Fill in the 'Name' field
    cy.get('input[name="name"]')
      .type('Bat Man')
      .should('have.value', 'Bat Man');

    // Fill in the 'Email' field with a valid email address
    cy.get('input[name="email"]')
      .type('BatMan112@gmail.com')
      .should('have.value', 'BatMan112@gmail.com');
      
    // Select 'Estonia' from the 'Country' dropdown
    cy.get('select#country')
      .select('Estonia')
      .should('contain', 'Estonia');
    
    // Select 'Tallinn' from the 'City' dropdown
    cy.get('select#city')
      .select('Tallinn')
      .should('contain', 'Tallinn');
      
    // Set the birthday date (ensure the max date is today or before)
    const today = new Date().toISOString().split('T')[0];  // Get today's date in yyyy-mm-dd format
    cy.get('input#birthday')
      .type(today)
      .should('have.value', today);
    
    // Select the frequency for receiving the newsletter ('Weekly')
    cy.get('input[type="radio"][value="Weekly"]')
      .check()
      .should('be.checked');
      
    // Check the privacy policy checkbox
    cy.get('input[type="checkbox"]').first().check().should('be.checked');
    

    // Click the submit button
    cy.get('button[type="submit"]').click();
    
    
  });

  it('should display error messages for invalid email', () => {
    // Try entering an invalid email
    cy.get('input[name="email"]').type('invalid-email').blur();
    
    // Check if the correct validation message is shown
    cy.get('#emailAlert').should('contain', 'Invalid email address');
  })
})
  /*
BONUS TASK: add functional tests for registration form 3
Task list:
* Create second test suite for functional tests
* Create tests to verify logic of the page:
    * all fields are filled in + corresponding assertions
    * only mandatory fields are filled in + corresponding assertions
    * mandatory fields are absent + corresponding assertions (try using function)
    * add file functionlity(google yourself for solution!)
 */