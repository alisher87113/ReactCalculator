import React, { Component } from 'react';
import MyContext from '../../context/MyContext';

const WithContext = (Component) => {
  return (props) => (
    <MyContext.Consumer>
      {(context) => <Component {...props} context={context} />}
    </MyContext.Consumer>
  );
};

export default WithContext;
