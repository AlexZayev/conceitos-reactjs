const people = [
  { id: 22, name: 'Alexandre', age: 45 },
  { id: 33, name: 'Kátia', age: 42 },
  { id: 44, name: 'Andressa', age: 10 },
  { id: 55, name: 'Alexia', age: 7 },
]

const filteredUsers = people.filter(p => !p.id.toString().includes(22));

console.log(filteredUsers);