import studentsDB from "../../database/studentsDB";

const getStudents = async () => {
  return await coursesDB.get();
};

const addStudent = async (name) => {

  let students = await studentsDB.get();
  const allIds = students.map((v) => v.id);
  const maxId = Math.max(...allIds);
  students.push({
    id: maxId + 1,
    nom: name,
  });
  await studentsDB.set(students);
  return students;
};

export { getStudents, addStudent };
