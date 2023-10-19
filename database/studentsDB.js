import { readFile, writeFile } from "fs/promises";

const get = async () => {
  try {
    const data = JSON.parse(await readFile("students.json"));
    return data;
  } catch {}
};

const set = async (courses) => {
  try {
    await writeFile("students.json", JSON.stringify(courses, null, 2));
  } catch {}
};

export default { get, set };