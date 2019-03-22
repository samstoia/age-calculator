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

  getEarthRemainingYears() {
    const earthLifeExpect = 71.5;
    return Math.floor(earthLifeExpect - this.getEarthAge());
  }

  getMercuryRemainingYears() {
    const earthLifeExpect = 71.5;
    return Math.floor((earthLifeExpect - this.getEarthAge()) / .24);
  }

  getVenusRemainingYears() {
    const earthLifeExpect = 71.5;
    return Math.floor((earthLifeExpect - this.getEarthAge()) / .62);
  }

  getMarsRemainingYears() {
    const earthLifeExpect = 71.5;
    return Math.floor((earthLifeExpect - this.getEarthAge()) / 1.88);
  }

  getJupiterRemainingYears() {
    const earthLifeExpect = 71.5;
    return Math.floor((earthLifeExpect - this.getEarthAge()) / 11.86);
  }

  earthYearsPastLifeExpectancy() {
    const earthLifeExpect = 71.5;
    let yearsPast = Math.abs(earthLifeExpect - this.getEarthAge());
    if ((earthLifeExpect - this.getEarthAge()) < 0) {
      return "You have lived " + Math.floor(yearsPast) + " years past the average earthling"
    }
  }


}
