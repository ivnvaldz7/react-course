<<<<<<< HEAD
import { getHeroeById } from "./bases/08-imp-exp";

const getHeroeByIdAsync = (id) => {
=======
import { getHeroeById } from "./08-imp-exp";

export const getHeroeByIdAsync = (id) => {
>>>>>>> 75885d521343108674ca3905635d7fc78638a8c8
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const p1 = getHeroeById(id);
      if (p1) {
        resolve(p1);
      } else {
        reject("No se pudo encontrar el héroe");
      }
    }, 2000);
  });
};

<<<<<<< HEAD
getHeroeByIdAsync(1).then(console.log).catch(console.warn);
=======
>>>>>>> 75885d521343108674ca3905635d7fc78638a8c8
