module.exports = {
  entry: __dirname + '/src/js/DateSampleMomentModule',
  module: {
    loaders: [
      {
        tests: /DateSampleMomentModule\.js$/, // Indicamos que tipo de archivos queremos que busque, en este caso todos los del tipo js
        include: __dirname + '/src/js/', //indicamos donde va a buscar esos ficheros
        loader: 'babel' // Para poder utilizar el loader de babel previamente tenemos que tener instalado el babel loader.
      }
    ]
  },
  
  output: {
    // En este caso es un objeto el cual necesita 2 parámetros
    path: './dist/js', // path no puede ser nunca una ruta absoluta.
    filename: 'bundleModules.js'
  }
  
};