const characters = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'маг', health: 0 },
  { name: 'лучник', health: 0 },
];

const alive = characters.filter((item) => item.health > 0);
const printAlive = document.createElement('ul');
alive.forEach((char) => {
  printAlive.innerHTML += `<li>${char.name}</li>`;
});
document.body.insertAdjacentElement('afterbegin', printAlive);
