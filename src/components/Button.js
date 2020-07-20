import React, { Component } from 'react';
import styled from 'styled-components';
import MyContext from '../context/MyContext';
import WithContext from './HOC/WithContext';

// Styling each button

const BtnStyled = styled.div`
  background-color: rgb(50, 50, 50);
  color: white;
  cursor: pointer;
  transition-duration: 0.2s;
  &:active {
    background-color: rgb(125, 125, 125);
  }
  &:nth-child(17) {
    grid-column: 1 / span 2;
  }
  &:nth-child(-n + 3) {
    color: black;
    background-color: rgb(162, 162, 162);
    transition-duration: 0.2s;
    &:active {
      background-color: rgb(255, 255, 255);
    }
  }
  &:nth-child(4n) {
    background-color: rgb(240, 147, 41);
    font-size: 3rem;
  }
  &:nth-child(${(props) => props.methodEl}) {
    background-color: rgb(255, 255, 255);
    color: rgb(240, 147, 41);
    font-size: 3rem;
  }

  &:last-child {
    background-color: rgb(240, 147, 41);
    &:active {
      background-color: rgb(255, 255, 255);
      color: rgb(240, 147, 41);
    }
  }
  &:nth-child(8) span {
    font-size: 2.1rem;
    font-weight: bolder;
    transform: translate(-0.8rem, 1.8rem);
  }
  &:nth-child(17) span {
    transform: translate(-4.5rem, 1.7rem);
  }
  &:nth-child(12) span {
    transform: translate(-50%, 40%);
  }
  &:nth-child(4) span {
    font-size: 3.5rem;
    font-weight: normal;
    transform: translate(-45%, 30%);
  }
  border-radius: 70px;
  text-align: center;
  position: relative;
`;

const StyledSpan = styled.span`
  position: absolute;
  transform: translate(-51%, 48%);
  font-size: 3rem;
`;

//Button
class Button extends Component {
  render() {
    const { method } = this.props.context.state;
    const methods = ['/', '*', '-', '+'];
    //getting child of operator buttons
    const methodEl = (methods.indexOf(method) + 1) * 4;
    console.log(methodEl);
    const { children } = this.props;
    return (
      //handling click passing children back
      <MyContext.Consumer>
        {(context) => (
          <BtnStyled
            methodEl={methodEl}
            disabled={true}
            onClick={() => context.handleClick(children)}
          >
            <StyledSpan>{children}</StyledSpan>
          </BtnStyled>
        )}
      </MyContext.Consumer>
    );
  }
}

export default WithContext(Button);
