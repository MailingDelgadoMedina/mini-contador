import React, {useState} from 'react';

import './App.css';

function App() {
  const [contador, setContador]=useState(0);

const incrementar = () => {

  setContador(contador + 1);
}
const decrementar = () => {
  setContador(contador - 1);
}

  return (

   <div>
      <h1>Bienvenido a mi aplicacion Contador</h1>
      <p> El contador es: {contador} </p>
      <button onClick = {incrementar}>+</button>
      <button onClick = {decrementar}>-</button>
   
    </div>



  );
}

export default App;
