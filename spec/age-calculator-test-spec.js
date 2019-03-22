import Galactic from './../src/age-calculator.js';

describe ("Galactic", function() {

  let testObject;
  let testBirthDate;

  beforeEach(function() {
    testBirthDate = "19871010";
    testObject = new Galactic(testBirthDate)
  })

  it("should return the user's age", function() {
    expect(testObject.getEarthAge()).toEqual(32)
  });

  it("should return the user's mercury age", function() {
      expect(testObject.getMercuryAge()).toEqual(133)
  });

  it("should return the user's venus age", function() {
      expect(testObject.getVenusAge()).toEqual(51)
  });

  it("should return the user's mars age", function() {
      expect(testObject.getMarsAge()).toEqual(17)
  });
  it("should return the user's jupiter age", function() {
      expect(testObject.getJupiterAge()).toEqual(2)
  });

  it("should tell user how many years they have left to live on earth based on average WHO earth life expectancy", function() {
      expect(testObject.getEarthRemainingYears()).toEqual(39);
  });

  it("should tell user how many years they have left to live on mercury based on average WHO earth life expectancy", function() {
      expect(testObject.getMercuryRemainingYears()).toEqual(164);
  });

  it("should tell user how many years they have left to live on venus based on average WHO earth life expectancy", function() {
      expect(testObject.getVenusRemainingYears()).toEqual(63);
  });

  it("should tell user how many years they have left to live on mars based on average WHO earth life expectancy", function() {
      expect(testObject.getMarsRemainingYears()).toEqual(21);
  });

  it("should tell user how many years they have left to live on jupiter based on average WHO earth life expectancy", function() {
      expect(testObject.getJupiterRemainingYears()).toEqual(3);
  });

  it("should tell user who has lived past life expectancy how many years they have lived past the WHO world life expectancy", function() {
    let testBirthDate = "19000101";
    let testObject = new Galactic(testBirthDate)
    expect(testObject.earthYearsPastLifeExpectancy()).toEqual("You have lived 47 years past the average earthling")
  });
});
