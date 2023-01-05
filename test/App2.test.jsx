/** * @jest-environment jsdom */

import { render, screen } from "@testing-library/react"
import { App } from "../src/App"


describe('Prueba en </App> ', () => { 
  const title = 'Curso de React'
  const subtitle = 'Con Fernando Herrera'
   test('Debe hacer match con snapshot', () => { 
    const {conatiner} = render(<App title={title}/>)
    expect(conatiner).toMatchSnapshot()
    })
    test('debe retorar un título que diga "Curso de React"', () => { 
      render(<App title={title}/>)
      expect(screen.getByText(title)).toBeTruthy()
     })
     test('Debe mostrar el título en un H1', () => { 
      render(<App title={title}/>)
      //heading level 1 apunta a la etiqueta html en el árbol 
      expect(screen.getByRole("heading",{level:1}).innerHTML).toContain(title)
    })
 })