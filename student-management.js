const students = [];

function addStudent(student) {
  students.push(student);
  return student;
}

function removeStudentById(id) {
  const index = students.findIndex((student) => student.id === id);
  return index === -1 ? null : students.splice(index, 1)[0];
}

function findStudentById(id) {
  return students.find((student) => student.id === id) || null;
}

function updateStudentScore(id, score) {
  const student = findStudentById(id);
  if (!student) return null;
  student.score = score;
  return student;
}

function displayStudents() {
  students.forEach((student) => {
    const result = student.score >= 50 ? 'PASS' : 'FAIL';
    console.log(`${student.id}. ${student.name} - ${student.score} (${result})`);
  });
}

function getClassAverage() {
  if (students.length === 0) return 0;
  return students.reduce((total, student) => total + student.score, 0) / students.length;
}

function getHighestScoringStudent() {
  return students.reduce((highest, student) => student.score > highest.score ? student : highest, students[0]) || null;
}

function getLowestScoringStudent() {
  return students.reduce((lowest, student) => student.score < lowest.score ? student : lowest, students[0]) || null;
}

addStudent({ id: 1, name: 'Daniel', age: 18, score: 72 });
addStudent({ id: 2, name: 'Amaka', age: 17, score: 48 });
addStudent({ id: 3, name: 'Chinedu', age: 18, score: 86 });

displayStudents();
console.log(`Class average: ${getClassAverage().toFixed(2)}`);
console.log(`Highest-scoring student: ${getHighestScoringStudent().name}`);
console.log(`Lowest-scoring student: ${getLowestScoringStudent().name}`);
