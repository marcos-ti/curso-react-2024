// function app() {
//   return (
//     <h1>Hello!!!!!!</h1>
//   )
// }
import React from 'react';

class App extends React.Component {
  
  state = {
    nome : '',
    altura: ''
  }

  modificarNome = (evento) => {
this.setState({
  nome: evento.target.value

})
  }
  
  render(){
    return(
      <>
      <input type='text' value={this.state.nome} onChange={this.modificarNome} />

      <p>Diga seu nome: {this.state.nome}</p>

      </>
    )
  }
}

export default App;