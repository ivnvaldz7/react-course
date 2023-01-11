import { fireEvent, render, screen } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe("Pruebas en CounterApp", () => {
    const value = 10;
  test("Debe hacer match con el snapshot", () => {
    const { container } = render(<CounterApp value={value} />);
    expect(container).toMatchSnapshot();
  });
  test("Debe verificar que el counter inicial sea 100", () => {
    render(<CounterApp value={value} />);
    //Tarea: validar que el value sea el que se necesita
    expect(screen.getByText(value)).toBeTruthy();
    expect(screen.getByRole("heading", { level: 2 }).innerHTML).toContain('10');
  });
  test('Simular clicks en el boton +1', () => { 
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('+1'))
    expect(screen.getByText('11')).toBeTruthy()
   })
   test('Simular clicks en el boton +1', () => { 
    render(<CounterApp value={value} />);
    fireEvent.click(screen.getByText('-1'))
    expect(screen.getByText('9')).toBeTruthy()
   })
});
