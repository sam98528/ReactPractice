import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Failed to fetch meals");
  //run -> Inserting
  //all -> Fetching
  return db.prepare(`SELECT * FROM meals`).all();
}
