import React, { useReducer } from 'react';

// Simpler implementation of reusing reducer
const withReducer = (WrappedComponent, reducer, initialState) => {
  const ReducerInjector = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return <WrappedComponent {...props} {...state} {...{ dispatch }} />;
  }
  return ReducerInjector;
}

export default withReducer;
