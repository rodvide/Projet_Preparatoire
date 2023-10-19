import coursesDB from "../../database/coursesDB";
const getCourses = async () => {
    return await coursesDB.get();
  };
  /*
  const getCourse = async (name) => {
    return await coursesDB.get();
  };
  */
  const addCourse = async (name) => {
    const courses = await coursesDB.get();
    const newId = courses[courses.length - 1].id + 1;
    const newCourse = {
      id: newId,
      nom: name,
    };
    courses.push(newCourse);
    await coursesDB.set(courses);
  };
  const removeCourse = async (id) => {
    const courses = await coursesDB.get();
    const isPresent = courses.map((course) => course.id == id).includes(true);
    if (isPresent) {
      const coursesWithoutRemovedCourse = courses.filter(
        (course) => course.id != id
      );
      await coursesDB.set(coursesWithoutRemovedCourse);
    } else throw new Error("No object with id");
  };
  
  export { getCourses, addCourse, removeCourse };