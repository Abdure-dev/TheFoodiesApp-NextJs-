import sql from "better-sqlite3";

//establish data base conncetion by executing sql as a function and passing the name of the data base
const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return db.prepare("SELECT * FROM meals").all();
}
