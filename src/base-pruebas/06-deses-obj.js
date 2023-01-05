const persona = {
  nombre: "Tony",
  edad: 45,
  clave: "Ironman",
};

export const usContext = ({ nombre, edad,clave }) => {
  return {
    nombre: nombre,
    clave: clave,
    edad: edad
  };
};