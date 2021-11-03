import { useState } from 'react';

function useInput(initialValue = '') {  
  const [inputVal, setInputVal] = useState(initialValue);
  const handleChange =  (e) => {
    setInputVal(e.target.value);
  };
  const resetInput = () => setInputVal(initialValue);

  return [inputVal, handleChange, resetInput];
}

export default useInput
