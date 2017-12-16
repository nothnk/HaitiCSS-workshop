import { expect } from 'chai';
import { FizzBuzzClass } from '../src/js/FizzBuzzClass.js';
//agregramos un ttítulo a nuestra suite de test
describe('Kata FizzBuzzClass', () => {
  
  // Crearemos una función que nos devuelva un número dado
  it('Should return a given number as a String', () => {
    // Preparamos los datos
    let fizzbuzz = new FizzBuzzClass(5);
    // Ahora indicamos lo que experamos que nos devuelva
    // En este caso llamamos a Fizzbuzz en su constructor indicamos un número
    expect(fizzbuzz.display()).to.be.a('String');
  });
  
  
  //dentro de este mismo "describe" creamos un nuevo test
  it('Should return Fizz if the given number is divisible by 3', () => {
    // Preparamos los parámetros
    let fizzbuzz = new FizzBuzzClass(3);
    // queremos obtener
    expect(fizzbuzz.display()).to.equal('Fizz');
  });
  
  it('Should return Buzz if the given number is divisible by 5', () => {
    // Preparamos los parámetros
    let fizzbuzz = new FizzBuzzClass(5);
    // queremos obtener
    expect(fizzbuzz.display()).to.equal('Buzz');
  });
  
  it('Should return FizzBuzz if the given number is divisible by 3 and 5', () => {
    // Preparamos los parámetros
    let fizzbuzz = new FizzBuzzClass(15);
    // queremos obtener
    expect(fizzbuzz.display()).to.equal('FizzBuzz');
  });
}); 
