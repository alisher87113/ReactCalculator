import React, { Component } from 'react';
import MyContext from './MyContext';

class Provider extends Component {
  state = {
    currentInput: 0,
    prevInput: null,
    method: null,
    //Property that lets browser know that input shows previous calculation result
    showingResult: false,
  };

  //method to copy current input into prevInput clean up current input
  setStateMethod = (method) => {
    if (this.state.method === null) {
      this.setState({ prevInput: this.state.currentInput });
      this.setState({ method: method });
      this.setState({ currentInput: 0 });
    } else {
      this.setState({ method: method });
    }
  };
  evaluate = () => {
    if (this.state.method === '+') {
      this.setState({
        currentInput:
          Number(this.state.currentInput) + Number(this.state.prevInput),
      });
    } else if (this.state.method === '-') {
      this.setState({
        currentInput:
          Number(this.state.prevInput) - Number(this.state.currentInput),
      });
    } else if (this.state.method === '/') {
      this.setState({
        currentInput:
          Number(this.state.prevInput) / Number(this.state.currentInput),
      });
    } else if (this.state.method === '*') {
      this.setState({
        currentInput:
          Number(this.state.currentInput) * Number(this.state.prevInput),
      });
    }
    this.setState({ showingResult: true });
    this.setState({ prevInput: null });
    this.setState({ method: null });
  };

  checkSymbol = (symbol) => {
    const { currentInput } = this.state;
    const intSymbol = Number(symbol);
    //handling Numbers and dot
    if (!isNaN(intSymbol) || symbol === '.') {
      if (currentInput === 0 || currentInput.length <= 8) {
        if (symbol === '.') {
          if (currentInput === 0 || currentInput.indexOf('.') === -1) {
            this.setState({ currentInput: currentInput + symbol });
          }
        } else if (currentInput === 0) {
          this.setState({ currentInput: symbol });
        } else if (currentInput !== 0) {
          this.setState({ currentInput: currentInput + symbol });
        }
      }
    }
    //handling methods
    else if (isNaN(intSymbol)) {
      if (symbol === 'C') {
        this.setState({ currentInput: 0 });
        this.setState({ prevInput: null });
        this.setState({ method: null });
      } else if (symbol === '+') {
        this.setStateMethod('+');
      } else if (symbol === '–') {
        this.setStateMethod('-');
      } else if (symbol === '✕') {
        this.setStateMethod('*');
      } else if (symbol === '÷') {
        this.setStateMethod('/');
      } else if (symbol === '+/-') {
        const toggledInput = Number(this.state.currentInput) * -1;
        this.setState({ currentInput: toggledInput });
      } else if (symbol === '=') {
        this.evaluate();
      }
    }
  };

  handleClick = (symbol) => {
    if (this.state.showingResult) {
      this.setState({ currentInput: 0 });
      this.setState({ showingResult: false });
      this.checkSymbol(symbol);
    } else {
      this.checkSymbol(symbol);
    }
  };

  render() {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          handleClick: (sym) => this.handleClick(sym),
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    );
  }
}
export default Provider;
