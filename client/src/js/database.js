import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("words", "readwrite");
  const store = tx.objectStore("words");
  const request = store.add({ content: content });
  const result = await request;
  console.log(result, "added this thing");
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  const jateDb = await openDB("jate", 1);
  const tx = jateDb.transaction("words", "readonly");
  const store = tx.objectStore("words");
  const request = store.getAll();
  const result = await request;
  console.log("result.value", result);
  return result;
};

initdb();
