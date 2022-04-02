import React from 'react'
import './App.css';
import { connect } from 'react-redux';
import { changeText } from './redux/actions';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      inputValue: '',
    }
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value
    })
  }

  render() {
    const { inputValue } = this.state;
    const { testStore, handleClick } = this.props;
    return (
      <div className="App">
        <p>teste</p>
        <input type='text' value={ inputValue } name='inputValue' onChange={ this.handleChange }/>
        <button onClick={ () => handleClick(inputValue) }>add</button>
        <p>{ testStore }</p>
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  testStore: store.message.text,
});

const mapDispatchToProps = ( dispatch ) => ({
  handleClick: (inputValue) => dispatch((changeText(inputValue)))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
