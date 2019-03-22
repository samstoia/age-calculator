import { getAge } from './../src/age-calculator.js';


describe ("getAge", function() {
  it("should return the user's age", function() {
    let birthDate = "19871010";
    let age = getAge(birthDate);
    expect(age).toEqual(31)
  });
});
