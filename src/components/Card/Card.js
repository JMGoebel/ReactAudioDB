import React, { useState, useEffect, useContext } from 'react';
import {Context} from '../../state/Store';

const Card = ({ song }) => {
  const [state, dispatch] = useContext(Context);

  useEffect(() => {document.title = `Artist: `}, []);

  return (
    <div>
      <h2>Song #1 {state.isLoading.toString()}</h2>
      <button onClick={()=> dispatch({type: 'SET_LOADING', payload: state.isLoading = !state.isLoading})}>Click Me</button>
    </div>
  )
};

export default Card;