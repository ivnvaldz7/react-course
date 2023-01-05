import { getUser, getUserActive } from "../../src/base-pruebas/05-funciones";

describe("Pruebas en Funciones", () => {
  test("Debe retornar un usuario", () => {
    const user = {
      uid: "ABC123",
      username: "ivnvldz7",
    };
    const fn = getUser()
    expect(user).toEqual(fn)
  });
});
describe('Pruebas en UserActive', () => { 
    test('Debe retornar un nombre',()=>{
        const name = 'Ivan'
        const testUser = getUserActive(name)
        expect(testUser).toEqual({
            uid: name,
            username: 'ivnvldz7'
        })
    })
 })