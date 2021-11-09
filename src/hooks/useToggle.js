import { useState } from 'react';

const useToggle = (startingState = false) => {
  const [isOn, setIsOn] = useState(startingState);
  const toggle = () => setIsOn(prev => !prev);

  return [isOn, toggle];
};

export default useToggle;