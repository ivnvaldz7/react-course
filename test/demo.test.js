describe("Prueba en demoTest", () => {
  test("Son iguales?", () => {
    const mess = "Hola mundo";
    const mess2 = mess.trim();
    expect(mess).toBe(mess2);
  });
});
