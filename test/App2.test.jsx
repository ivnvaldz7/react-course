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
    test('debe retorar un title', () => { 
      render(<App title={title}/>)
      expect(screen.getByText(title)).toBeTruthy()
     })    
 })