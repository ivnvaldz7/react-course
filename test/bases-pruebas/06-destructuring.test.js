import { usContext } from "../../src/base-pruebas/06-deses-obj"

describe('Prubas en Destructuring', () => { 
   test('Debe retornar un objet', () => { 
    const hero = {
        nombre: "Tony",
        edad: 45,
        clave: "Ironman",
      };
    const testUsContext = usContext(hero)
    console.log(testUsContext)
    expect(hero).toEqual(testUsContext)
    }) 
 })