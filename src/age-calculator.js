export default class Galactic {
  constructor(birthDate) {
    this.year = parseInt(birthDate.substr(0, 4));
    this.month = parseInt(birthDate.substr(4, 2));
    this.day = parseInt(birthDate.substr(6, 2));
    this.birthDate = new Date(this.year, this.month -1, this.day);
  }

  getEarthAge() {
    let today = new Date();
    return Math.floor(today.getFullYear() - this.year);
  }

  getMercuryAge() {
    let today = new Date();
    return Math.floor((today.getFullYear() - this.year) / .24);
  }

  getVenusAge() {
    let today = new Date();
    return Math.floor((today.getFullYear() - this.year) / .62);
  }

  getMarsAge() {
    let today = new Date();
    return Math.floor((today.getFullYear() - this.year) / 1.88);
  }

  getJupiterAge() {
    let today = new Date();
    return Math.floor((today.getFullYear() - this.year) / 11.86);
  }

}


// export function getJupiterAge(birthDate) {
//   let age = getEarthAge(birthDate);
//   let jupiterAge = Math.floor(age / 11.86);
//   return jupiterAge;
// }
//
// export function getEarthRemainingYears(birthDate) {
//   let age = getEarthAge(birthDate);
//   const earthLifeExpect = 71.5;
//   let remainingEarthYears = Math.floor(earthLifeExpect - age);
//   return remainingEarthYears;
// }
//
// export function getMercuryRemainingYears(birthDate) {
//   let age = getEarthAge(birthDate);
//   let mercuryAge = age / .24
//   const mercuryLifeExpect = 71.5 / .24;
//   let remainingMercuryYears = Math.floor(mercuryLifeExpect - mercuryAge);
//   return remainingMercuryYears;
// }
//
// export function getVenusRemainingYears(birthDate) {
//   let age = getEarthAge(birthDate);
//   let venusAge = age / .62;
//   const venusLifeExpect = 71.5 / .62;
//   let remainingVenusYears = Math.floor(venusLifeExpect - venusAge);
//   return remainingVenusYears;
// }
//
// export function getMarsRemainingYears(birthDate) {
//   let age = getEarthAge(birthDate);
//   let marsAge = age / 1.88;
//   const marsLifeExpect = 71.5 / 1.88;
//   let remainingMarsYears = Math.floor(marsLifeExpect - marsAge);
//   return remainingMarsYears;
// }
//
// export function getJupiterRemainingYears(birthDate) {
//   let age = getEarthAge(birthDate);
//   let jupiterAge = age / 11.86;
//   const jupiterLifeExpect = 71.5 / 11.86;
//   let remainingJupiterYears = Math.floor(jupiterLifeExpect - jupiterAge);
//   return remainingJupiterYears;
// }
