import React, { Component } from 'react';
import styled from 'styled-components';
import MyContext from '../context/MyContext';
import WithContext from './HOC/WithContext';

// Styled Component holds everything but time above the number buttons
const DisplayStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.98);
  height: 16.9rem;
  position: relative;
`;

//Styled Component that holds input numbers and output
const NumbersPanelStyled = styled.div`
  background-color: rgba(0, 0, 0, 0.98);
  height: 10.9rem;
  text-align: right;
`;
const StyledDiv = styled.div`
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  font-size: (${(props) => props.calcFontSize});
  line-height: 7.9rem;
  width: 100%;
  font-size: 10.9rem;
  /* padding: 0 20px 20px 20px; */
  padding: 0 1.9rem 1.9rem 1.9rem;

  position: absolute;
  bottom: 0;
  float: right;
  text-align: right;
`;
class Display extends Component {
  render() {
    const { currentInput } = this.props.context.state;
    const currentInputLength = currentInput.length;
    console.log(currentInput.length);
    const calcFontSize =
      (currentInputLength <= 5 ? 10.9 : 10.9 / (currentInputLength / 5)) +
      'rem';
    const calcLineHeight =
      (currentInputLength <= 5 ? 7.9 : 7.9 / (currentInputLength / 5)) + 'rem';
    return (
      <MyContext.Consumer>
        {(context) => (
          <DisplayStyled>
            <NumbersPanelStyled>
              <StyledDiv
                style={{ fontSize: calcFontSize, lineHeight: calcLineHeight }}
              >
                {context.state.currentInput}
              </StyledDiv>
            </NumbersPanelStyled>
          </DisplayStyled>
        )}
      </MyContext.Consumer>
    );
  }
}

export default WithContext(Display);
