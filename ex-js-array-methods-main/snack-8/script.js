const students = [
  {
    id: 1,
    name: 'Marco Lanci',
    age: 32,
    classe: '3C'
  },
  {
    id: 2,
    name: 'Mario Banfi',
    age: 34,
    classe: '4A'
  },
  {
    id: 3,
    name: 'Luigi Banzi',
    age: 33,
    classe: '5B'
  },
];

// Recupera la classe dello studente 'Marco Lanci'
// Risultato: '3C'

/*const student = students.filter((student) => student.class === '3C');

console.log(student);
*/

const student = students.filter((student) => student.name === 'Marco Lanci');
console.log(student[0].classe);








