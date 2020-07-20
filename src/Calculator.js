import React, { Component } from 'react';
import ButtonsPanel from './components/ButtonsPanel';
import styled from 'styled-components';

import DisplayStyled from './components/Display';
const Screen = styled.div`
  width: 32rem;
  height: 56.8rem;
  margin: auto;
  margin-top: 4rem;
`;

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputField: 0,
    };
  }

  onUpdate = (q) => {
    console.log(q);
    this.setState({ inputField: q });
  };
  render() {
    console.log(this.state.inputField);
    return (
      <Screen>
        <DisplayStyled>{this.state.inputField}</DisplayStyled>
        <ButtonsPanel onUpdate={this.onUpdate} />
      </Screen>
    );
  }
}

export default Calculator;
