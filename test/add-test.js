//lo primero importamos la librería de aserciones(afirmaciones) chai

// esta sintaxis al usar babel para convertir el código a ES5 podemos usar "import"

import { expect } from 'chai'; // esta línea indica que importamos el objeto expect desde la librería chai, que la tenemos instalada dentro de la carpeta node_modules
import { add } from '../src/js/math'; // importamos un objeto desde un fichero propio creado
describe('adding 2 numbers', () => {
  it('Should return 3 when we passed 1 + 2', () => {
    const suma = add(1,2);
    const result = 3;
    expect(suma).to.equal(result);
  });
}); 