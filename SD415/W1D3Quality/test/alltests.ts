import { assert } from "chai";
/* import from functions.ts module-- note the .js extension (even though actual file is .ts */
import { isVowel } from "../src/isVowel.js";
import { computeSalesCommission} from "../src/commission.js";
import { getSavingBalance } from "../src/compound.js";
import { checkPrime } from "../src/checkPrime.js";
import { houseCost} from "../src/downPayment.js";
//checks for vowel
describe("isVowel", function () {
  it("a is vowel", function () {
    assert.equal(isVowel("a"), true);
  });
  it("e is vowel", function () {
    assert.equal(isVowel("e"), true);
  });
  it("i is vowel", function () {
    assert.equal(isVowel("i"), true);
  });
  it("o is vowel", function () {
    assert.equal(isVowel("o"), true);
  });
  it("u is vowel", function () {
    assert.equal(isVowel("u"), true);
  });
  it("z is not vowel", function () {
    assert.equal(isVowel("z"), false);
  });
  it("5 is not vowel", function () {
    assert.equal(isVowel("5"), false);
  });
});

//calculates commission 
describe("test of ComputSalesCommission", function () {
    it("tests salaried and 200 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 200), 0);
    });
    it("tests not salaried and 200 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 200), 0);
    });
    it("tests salaried and 300 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 300), 3);
    });
    it("tests not salaried and 300 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 300), 6);
    });
    it("tests salaried and 3500 sales", function () {
      assert.strictEqual(computeSalesCommission(true, 3500), 65);
    });
    it("tests not salaried and 3500 sales", function () {
      assert.strictEqual(computeSalesCommission(false, 3500), 100);
    });
  });
  //checks for prime 
  describe("checkPrime returns true if argument is prime", function () {
    it("37 is prime", function () {
      assert.strictEqual(checkPrime(37), true);
    });
    it("77 is not prime", function () {
      assert.strictEqual(checkPrime(77), false);
    });
  });

  //for downPayment housecost function 
  describe ("calculate down Payment",function(){
    it("if the house  cost 40000",function(){
    assert.strictEqual(houseCost(40000),2000);
    });
    it("if the house cost 50000",function(){
        assert.strictEqual(houseCost(50000),2500);
    });
    it("if the house cost 100k",function(){
        assert.strictEqual(houseCost(100000),7500)
    });
    it("is the house cost 250k",function(){
        assert.strictEqual(houseCost (250000),25000)
    })
    })
    // compund check, didn't pass
  
  describe("checking my compund function",function(){
    it("tests $100 for 1 year at 10% monthly compound", function(){
        // const exact = getSavingBalance(100, 10, 1);
        // assert.strictEqual(+exact.toFixed(2), 110.47 );
        assert.strictEqual(getSavingBalance(100,10,1),110.47)
        })
    })
    
