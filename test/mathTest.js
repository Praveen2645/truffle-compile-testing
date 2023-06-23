const Maths = artifacts.require("Maths");

contract("TestMaths", () => {
    
    it("should add two numbers correctly", async () => {
        const maths = await Maths.deployed(); // deploy the maths contract
   
        // Call the add function
        const result = await maths.add(2, 3);// call the add function
   
        // Assert that the result is correct
        assert.equal(result, 5, "Addition result should be 5");
      });

      it("should sub two numbers correctly", async () => {
        const maths = await Maths.deployed();
   
        // Call the sub function
        const Result = await maths.sub(3, 3);
   
        // Assert that the result is correct
        assert.equal(Result, 0, "Substraction result should be 0");
      });
   
  });

