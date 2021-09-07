import React, { Component } from 'react'

export class AppClass extends Component {
    constructor(props){
        super(props);

        this.state = {
            contador: 0,
        };
    }


     incrementar = () => {
     this.setState({
         contador: this.state.contador + 1
     });
    };

    decrementar = () => {
        this.setState({
            contador: this.state.contador - 1
        });
       };
    render() {
        return (
            <div>
      <h1>Contador creado con un componente de clase</h1>
      <p> El contador es: {this.state.contador} </p>
      <button onClick = {this.incrementar}>+</button>
      <button onClick = {this.decrementar}>-</button>
   
    </div>
        )
    }
}

export default AppClass
