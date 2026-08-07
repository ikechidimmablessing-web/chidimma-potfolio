const students = [];

function addStudent(student) {
  students.push(student);
  return student;
}

function removeStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students.splice(i, 1)[0];
    }
  }
  return null;
}

function findStudentById(id) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].id === id) {
      return students[i];
    }
  }
  return null;
}

function updateStudentScore(id, score) {
  const student = findStudentById(id);
  if (!student) return null;
  student.score = score;
  return student;
}

function displayStudents() {
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const result = student.score >= 50 ? 'PASS' : 'FAIL';
    console.log(`${student.id}. ${student.name} - ${student.score} (${result})`);
  }
}

function getClassAverage() {
  if (students.length === 0) return 0;
  let total = 0;
  for (let i = 0; i < students.length; i++) {
    total += students[i].score;
  }
  return total / students.length;
}

function getHighestScoringStudent() {
  if (students.length === 0) return null;
  let highest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score > highest.score) {
      highest = students[i];
    }
  }
  return highest;
}

function getLowestScoringStudent() {
  if (students.length === 0) return null;
  let lowest = students[0];
  for (let i = 1; i < students.length; i++) {
    if (students[i].score < lowest.score) {
      lowest = students[i];
    }
  }
  return lowest;
}

addStudent({ id: 1, name: 'Daniel', age: 18, score: 72 });
addStudent({ id: 2, name: 'Amaka', age: 17, score: 48 });
addStudent({ id: 3, name: 'Chinedu', age: 18, score: 86 });

displayStudents();
console.log(`Class average: ${getClassAverage().toFixed(2)}`);
console.log(`Highest-scoring student: ${getHighestScoringStudent().name}`);
console.log(`Lowest-scoring student: ${getLowestScoringStudent().name}`);
