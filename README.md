# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Instalar y ejecutar

In the project directory, you can run:
### `npm install`
### `npm start`




## Explicaciones

Formularios clasicos controlados (cuando el componente se encarga de renderizar y de controlar que pasa en el formulario)

### Formulario Clásico
Componente FormularioClasico.jsx
  cada elemento del formulario tiene su variable donde guarda el valor
  la misma variable se usará en el atributo name del elemento
  asi podremos difenciar con un switch case en el metodo que maneja los cambios
  de esta manera evitamos crear un método manejar por cada elemento.

### Formulario con Formik y Yup
Formulario.jsx
Permite definir un esquema de validaciones y los diferentes mensajes de error

