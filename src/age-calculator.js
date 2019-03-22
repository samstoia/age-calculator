
export function getAge(birthDate) {
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
