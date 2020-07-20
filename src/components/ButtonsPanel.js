import React, { Component } from 'react';
import { buttons } from './buttons';
import Button from './Button';
import styled from 'styled-components';

const ButtonsGrid = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(5, 67.25px);
  background-color: rgba(0, 0, 0, 0.98);
  padding: 0 10px 10px 10px;
`;

//method to handle click button with numbers

class ButtonsPanel extends Component {
  state = {
    input: 0,
  };

  //Handling click on numbers , checking if Input is empty
  handleClick = (symbol) => {
    if (this.state.input == '0') {
      this.setState({ input: symbol });
    } else {
      this.setState({ input: this.state.input + symbol });
    }
    this.props.onUpdate(symbol);
  };

  //handling click on ZERO , checking if input is empty
  handleClickZero = (symbol) => {
    if (this.state.input != '0') {
      this.setState({ input: this.state.input + symbol });
    }
  };

  //handling click on DOT , checking if input ALREDY has dot
  handleClickDot = (symbol) => {
    if (this.state.input == '0' || this.state.input.indexOf('.') == -1) {
      this.setState({ input: this.state.input + symbol });
    }
  };

  // sendInput = () => {
  //   const currInput = this.state.input;
  //   this.props.getInput(currInput);
  // };
  // props.onUpdate(this.state.input);
  render() {
    return (
      <ButtonsGrid>
        <Button>C</Button>
        <Button>+/-</Button>
        <Button>%</Button>
        <Button>÷</Button>
        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>
        <Button>✕</Button>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>–</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>+</Button>
        <Button>0</Button>
        <Button>.</Button>
        <Button>=</Button>
      </ButtonsGrid>
    );
  }
}

export default ButtonsPanel;
