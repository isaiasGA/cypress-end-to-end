//Cypress is an open source test runner that takes in code from testing libraries such as MOCHA and CHAI

//1.: describe is a method taked from MOCHA library
  //it is used in order to describe what our test is doing inside a "string"
describe("Test our inputs and submit our form", function()
{
    //1.2: Test code will go here

    //1.4: 'beforeEach': A hook that will run BEFORE an actual TEST is run/executed. 
      //This is a HOOK coming from MOCHA library
    beforeEach(function(){
        //before running a test, visit localhost3000
        cy.visit("http://localhost:3000/");
    })
      //1.3:'it' is a method used for when we want to start a TEST. We type in in "" what the test is going to do
    it("add test to inputs and submit form", function() {
        //.get(works the same as a querySelector, where we look for something)
      cy.get('input[name="name"]')
        //1.4: As the name implies, "type" is used to type something in the selected .get(input)
        .type("Isaias here 😎")
        //1.5: We are using "should" to make sure that a certain tag/input has the value that we expect
        .should("have.value", "Isaias here 😎");
      cy.get("input[name='email']") 
        .type('email@gmail.com')
        .should("have.value", "email@gmail.com"); 

    });
});