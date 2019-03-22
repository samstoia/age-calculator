import Galactic from './../src/age-calculator.js';

describe ("Galactic", function() {

  it("should return the user's age", function() {
    let testBirthDate = "19871010";
    let testObject = new Galactic(testBirthDate)
    expect(testObject.getEarthAge()).toEqual(32)
  });

});





// import { getEarthAge, getMercuryAge, getVenusAge, getMarsAge, getJupiterAge, getEarthRemainingYears, getMercuryRemainingYears, getVenusRemainingYears, getMarsRemainingYears, getJupiterRemainingYears } from './../src/age-calculator.js';
//
// describe ("getEarthAge", function() {
//
//   it("should return the user's age", function() {
//     let birthDate = "19871010";
//     let age = getEarthAge(birthDate);
//     expect(age).toEqual(31)
//   });
//
// });
//
// describe ("getMercuryAge", function() {
//
//   it("should return the user's mercury age", function() {
//     let birthDate = "19871010";
//     let mercuryAge = getMercuryAge(birthDate);
//     expect(mercuryAge).toEqual(129)
//   });
//
// });
//
// describe ("getVenusAge", function() {
//
//   it("should return the user's venus age", function() {
//     let birthDate = "19871010";
//     let venusAge = getVenusAge(birthDate);
//     expect(venusAge).toEqual(50)
//   });
// });
//
// describe ("getMarsAge", function() {
//
//   it("should return the user's mars age", function() {
//     let birthDate = "19871010";
//     let marsAge = getMarsAge(birthDate);
//     expect(marsAge).toEqual(16)
//   });
//
// });
//
// describe ("getJupiterAge", function() {
//
//   it("should return the user's jupiter age", function() {
//     let birthDate = "19871010";
//     let jupiterAge = getJupiterAge(birthDate);
//     expect(jupiterAge).toEqual(2)
//   });
// });
//
// describe("getEarthRemainingYears", function() {
//   it("should tell user how many years they have left to live live based on average WHO earth life expectancy", function() {
//     let birthDate = "19871010";
//     let remainingEarthYears = getEarthRemainingYears(birthDate);
//     expect(remainingEarthYears).toEqual(40);
//   });
// });
//
// describe("getMercuryRemainingYears", function() {
//   it("should tell user how many years they have left to live live on Mercury based on average life expectancy", function() {
//     let birthDate = "19871010";
//     let remainingMercuryYears = getMercuryRemainingYears(birthDate);
//     expect(remainingMercuryYears).toEqual(168);
//   });
// });
//
// describe("getVenusRemainingYears", function() {
//   it("should tell user how many years they have left to live live on Venus based on average life expectancy", function() {
//     let birthDate = "19871010";
//     let remainingVenusYears = getVenusRemainingYears(birthDate);
//     expect(remainingVenusYears).toEqual(65);
//   });
// });
//
// describe("getMarsRemainingYears", function() {
//   it("should tell user how many years they have left to live live on Mars based on average life expectancy", function() {
//     let birthDate = "19871010";
//     let remainingMarsYears = getMarsRemainingYears(birthDate);
//     expect(remainingMarsYears).toEqual(21);
//   });
// });
//
// describe("getJupiterRemainingYears", function() {
//   it("should tell user how many years they have left to live live on Jupiter based on average life expectancy", function() {
//     let birthDate = "19871010";
//     let remainingJupiterYears = getJupiterRemainingYears(birthDate);
//     expect(remainingJupiterYears).toEqual(3);
//   });
// });
