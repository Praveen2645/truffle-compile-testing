const SimpleStorage = artifacts.require("SimpleStorage"); //requiring artifact with contract name

contract("TestSimpleStorage", (accounts) => { 
//test
    it("should set the value correctly", async () => {
        const simpleStorage = await SimpleStorage.deployed();
   
        // Call the setter function
        await simpleStorage.setter(42);
   
        // Get the value using the getter function
        const value = await simpleStorage.getter();
   
        // Assert that the value is set correctly
        assert.equal(value, 42, "Value should be set to 42");
      });
   
  });
