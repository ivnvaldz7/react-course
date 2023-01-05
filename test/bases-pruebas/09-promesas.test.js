import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas"

describe('Pruebas en Promesas', () => { 
    test('Debe retornar un heroe en promesa', (done) => { 
        const id = 1
        getHeroeByIdAsync(id)
        .then(hero=>{
            expect(hero).toEqual(
                {
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                }
            )
            done()
        })

     })
 })
 describe('Pruebas en Promesas', () => { 
    test('Manejo de error', (done) => { 
        const p1 = 1
        getHeroeByIdAsync(p1)
        .then(hero =>{
            expect(p1).toBeFalsy()
            done() 
        })
        .catch(
            error=>{
                expect(p1).toBe('Imposible')
                done()
            }

        )
     })
  })