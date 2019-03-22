import { getEarthAge, getMercuryAge, getVenusAge, getMarsAge, getJupiterAge } from './../src/age-calculator.js';

describe ("getEarthAge", function() {

  it("should return the user's age", function() {
    let birthDate = "19871010";
    let age = getEarthAge(birthDate);
    expect(age).toEqual(31)
  });

});

describe ("getMercuryAge", function() {

  it("should return the user's mercury age", function() {
    let birthDate = "19871010";
    let mercuryAge = getMercuryAge(birthDate);
    expect(mercuryAge).toEqual(129)
  });

});

describe ("getVenusAge", function() {

  it("should return the user's venus age", function() {
    let birthDate = "19871010";
    let venusAge = getVenusAge(birthDate);
    expect(venusAge).toEqual(50)
  });

});

describe ("getMarsAge", function() {

  it("should return the user's mars age", function() {
    let birthDate = "19871010";
    let marsAge = getMarsAge(birthDate);
    expect(marsAge).toEqual(16)
  });

});

describe ("getJupiterAge", function() {

  it("should return the user's jupiter age", function() {
    let birthDate = "19871010";
    let jupiterAge = getJupiterAge(birthDate);
    expect(jupiterAge).toEqual(2)
  });

});
