// customHook

import { useState } from 'react';

const useCounter = (initialState = 10) => {
  const [counter, setCounter] = useState(initialState); // 10 (default)

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  const reset = () => {
    setCounter(initialState);
  };

  // este custom hook extrae la lógica del contador
  return {
    counter,
    increment,
    decrement,
    reset,
  };
};

export default useCounter;
