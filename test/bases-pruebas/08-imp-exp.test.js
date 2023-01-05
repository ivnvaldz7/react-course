import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import { heroes } from "../../src/base-pruebas/data/heroes";
describe("Pruebas en Importaci{on", () => {
  test("getHeroe debe retornar un heroe por ID", () => {
    const { id, name, owner } = getHeroeById(1);
    expect(id).toEqual(expect.any(Number));
    expect(name).toEqual(expect.any(String));
    expect(owner).toEqual(expect.any(String));
  });
});
describe("Prueba en getByOwner", () => {
  test("Debe retornar heroes por owners", () => {
    const heroesDC = getHeroesByOwner("DC");
    const ownerDC = "DC";
    const ownerMarvel = "Marvel";
    expect(heroesDC).toEqual(heroes.filter((heroe) => heroe.owner === ownerDC));
    const heroesMarvel = getHeroesByOwner("Marvel");
    expect(heroesMarvel).toEqual(
      heroes.filter((heroe) => heroe.owner === ownerMarvel)
      );
  });
});