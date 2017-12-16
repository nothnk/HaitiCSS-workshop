// Vamos a desarrollar la kata FizzBuzz (devolver fizz si el número es divisible por 3, buzz si es divisible por 5 y fizzbuzz si lo es entre 3 y 5)
// Para ello usaremos la metodología TDD
// 
// TDD está basado en un ciclo de desarrollo en el cual 
// Lo primero es escribir los test (fallando: fail) con una espeficicación de lo que queremos que haga nuestro programa
// Después los hacemos que pasen (success), escribiendo el código fuente para que nos pase ese test

import { expect } from 'chai';
// importamos nuestra librería
import { FizzBuzz } from '../src/js/FizzBuzz.js';
//agregramos un ttítulo a nuestra suite de test
describe('Kata FizzBuzz', () => {
  
  // Crearemos una función que nos devuelva un número dado
  it('Should return a given number as a String', () => {
    // Preparamos los datos
    
    // Ahora indicamos lo que experamos que nos devuelva
    // En este caso llamamos a Fizzbuzz en su constructor indicamos un número
    expect(FizzBuzz(1)).to.be.a('String');
  });
  
  //dentro de este mismo "describe" creamos un nuevo test
  it('Should return Fizz if the given number is divisible by 3', () => {
    // Preparamos los parámetros
    var num = 3;
    // queremos obtener
    expect(FizzBuzz(num)).to.equal('Fizz');
    // Añadimos más causísticas para ver si en realidad es así
    expect(FizzBuzz(6)).to.equal('Fizz');
    expect(FizzBuzz(9)).to.equal('Fizz');
    expect(FizzBuzz(12)).to.equal('Fizz');
  });
  
  it('Should return Buzz if the given number is divisible by 5', () => {
    // Preparamos los parámetros
    var num = 5;
    // queremos obtener
    expect(FizzBuzz(num)).to.equal('Buzz');
    // Añadimos más causísticas para ver si en realidad es así
    expect(FizzBuzz(10)).to.equal('Buzz');
    expect(FizzBuzz(25)).to.equal('Buzz');
  });
  
  it('Should return FizzBuzz if the given number is divisible by 3 and 5', () => {
    // Preparamos los parámetros
    var num = 15;
    // queremos obtener
    expect(FizzBuzz(num)).to.equal('FizzBuzz');
    expect(FizzBuzz(30)).to.equal('FizzBuzz');
    expect(FizzBuzz(45)).to.equal('FizzBuzz');
  });
  
}); 


/*
    LLEGADO a este punto en el que sabemos que nuestro código devuelve lo que queremos ya que lo tenemos controlado con test
    Nos permite hacer cambios en el codigo fuente por ejemplo refactorizando si no se rompen los test es que el codigo sigue siendo válido.
    
    Otra caso es que ampliemos el código, entonces 
    
    1) Lo primero es crear un nuevo test, nos falla porque no está creado el código,
    2) Creamos el código y hacemos que pase el test
    3) Refactorizamos ya sin miedo (ojo si es necesario)
    
 */