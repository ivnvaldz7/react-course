import { getSaludo } from "../../src/base-pruebas/02-template-string"

describe('Prueba en getSaludo', () => { 
    test('getSaludo debe devolver un nombre',()=>{
        const name = 'Ivan'
        const fn = getSaludo(name)
        expect(fn).toBe(`Hola ${name}`)
    }) })   
