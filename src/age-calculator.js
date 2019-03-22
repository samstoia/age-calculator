export function getEarthAge(birthDate) {
  let year = Number(birthDate.substr(0, 4));
  let month = Number(birthDate.substr(4, 2)) -1;
  let day = Number(birthDate.substr(6, 2));
  let today = new Date();
  let age = today.getFullYear() - year;
  if (today.getMonth() < month || (today.getMonth() == month && today.getDate() < day)) {
  age--;
  }
  return age;
}

export function getMercuryAge(birthDate) {
  let age = getEarthAge(birthDate);
  let mercuryAge = Math.floor(age / .24);
  return mercuryAge;
}

export function getVenusAge(birthDate) {
  let age = getEarthAge(birthDate);
  let venusAge = Math.floor(age / .62);
  return venusAge;
}

export function getMarsAge(birthDate) {
  let age = getEarthAge(birthDate);
  let marsAge = Math.floor(age / 1.88);
  return marsAge;
}

export function getJupiterAge(birthDate) {
  let age = getEarthAge(birthDate);
  let jupiterAge = Math.floor(age / 11.86);
  return jupiterAge;
}

export function getEarthRemainingYears(birthDate) {
  let age = getEarthAge(birthDate);
  const earthLifeExpect = 71.5;
  let remainingEarthYears = Math.floor(earthLifeExpect - age);
  return remainingEarthYears;
}

export function getMercuryRemainingYears(birthDate) {
  let age = getEarthAge(birthDate);
  let mercuryAge = age / .24
  const mercuryLifeExpect = 71.5 / .24;
  let remainingMercuryYears = Math.floor(mercuryLifeExpect - mercuryAge);
  return remainingMercuryYears;
}

export function getVenusRemainingYears(birthDate) {
  let age = getEarthAge(birthDate);
  let venusAge = age / .62;
  const venusLifeExpect = 71.5 / .62;
  let remainingVenusYears = Math.floor(venusLifeExpect - venusAge);
  return remainingVenusYears;
}

export function getMarsRemainingYears(birthDate) {
  let age = getEarthAge(birthDate);
  let marsAge = age / 1.88;
  const marsLifeExpect = 71.5 / 1.88;
  let remainingMarsYears = Math.floor(marsLifeExpect - marsAge);
  return remainingMarsYears;
}

export function getJupiterRemainingYears(birthDate) {
  let age = getEarthAge(birthDate);
  let jupiterAge = age / 11.86;
  const jupiterLifeExpect = 71.5 / 11.86;
  let remainingJupiterYears = Math.floor(jupiterLifeExpect - jupiterAge);
  return remainingJupiterYears;
}
