import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("Pruebas en destructurin de arreglos", () => {
  test("debe retornar un string y un número", () => {
    const [letras, numeros] = retornaArreglo()
    //expect(typeof letras).toBe('string')
    //expect(typeof numeros).toBe('number') -> Valida por tipo de dato
    expect(letras).toEqual(expect.any(String))
    expect(numeros).toEqual(expect.any(Number))//Valida que retorne cualquier tipo de número
  });
});
