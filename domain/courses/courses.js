import coursesDB from "../../database/coursesDB.js";
const getCourses = async () => {
    return await coursesDB.get();
  };
  /*
  const getCourse = async (name) => {
    return await coursesDB.get();
  };
  */
  const addCourse = async (name) => {
    /*
    const courses = await coursesDB.get();
    const newId = courses[courses.length - 1].id + 1;
    const newCourse = {
      id: newId,
      nom: name,
    };
    courses.push(newCourse);
    await coursesDB.set(courses);
    */
    let courses = await coursesDB.get();
    const allIds = courses.map((v) => v.id);
    const maxId = Math.max(...allIds);
    courses.push({
      id: maxId + 1,
      nom: name,
    });
    await coursesDB.set(courses);
    return courses;
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