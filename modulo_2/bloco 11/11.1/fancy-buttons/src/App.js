import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.btnTeste = this.btnTeste.bind(this);
    this.state = {
      numeroDeClicks: 0
    }
  }

  btnTeste() {
    console.log('funcionou');
    this.setState((estadoAnterior) => ({
      numeroDeClicks: estadoAnterior.numeroDeClicks + 1
    }))
  }
  render() {
    return (
      <div className="App">
        <button onClick={this.btnTeste}>{this.state.numeroDeClicks}</button>
      </div>
    );
  }
}

export default App;
