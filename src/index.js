import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
 import App from './App/index.js';
import './index.css';

// function App({saludo, nombre}) {
//   return(
//     <h1>{saludo}, {nombre}</h1>
//   )
// }
// //HOC: dentro de su funcion devuelve otro componente
// function HoCSaludo(WrappedComponent) {
//   //funcion intermedia
//   return function WrappedComponentHocSaludo(saludo) {
    
//     return function ComponenteDeVerdad(props) {
//       return (
//         <>
//         <WrappedComponent {...props} saludo={saludo} />
//         <p>Acompañando al wrappedComponent</p>
//         </>
//       )
      
//     }
//   }
// }
// const AppWithHoc = HoCSaludo(App)('Buenas buenas')



ReactDOM.render(
  <App saludo="buenas" nombre="Jose" />,
  // <AppWithHoc nombre="jose"/>,
  document.getElementById('root')
);


