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
