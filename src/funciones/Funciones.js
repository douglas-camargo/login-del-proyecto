//Funcion para validar que se acepten solo numeros
export const validarNumero = (string) => {
  if (string !== undefined && !/^([0-9])*$/.test(string) && !/^\+([0-9])*$/.test(string)) {
    return false;
  }
  return true;
};