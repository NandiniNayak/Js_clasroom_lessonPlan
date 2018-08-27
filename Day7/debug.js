const coderInstructors = ["Nands", "Alex", "Saad", "Bianac", "Jamie"];
const students = ["Allen","Long","Arthur", "Mariam", "Jesse", "Andrew", "Olie"];

intro = (name) => {
  console.log(`Hi ${name}`)
}

for (let teacher of coderInstructors) {
    intro(teacher);
}

for (let student of students) {
    intro(student);
}
