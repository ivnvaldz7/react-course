/** * @jest-environment jsdom */

import { render } from "@testing-library/react"
import { App } from "../src/App"


describe('Prueba en </App> ', () => { 
    test('Debe hacer match con el snapshot', () => {
        const title="Curso de React" 
        const {container} = render(<App title={title}/>)
        expect(container).toMatchSnapshot()
     })
     test('Debe contener el título en un h1', () => { 
        const title="Curso de React" 
        const {getByText} = render(<App title={title}/>)
        expect(getByText(title)).toBeTruthy()
      })
 })