import React, { useState } from 'react';

const SortFilter = props => {
  const [onColor, setOnColor] = useState(false);
  console.log(props);
  const switchFilter = () => {
    setOnColor(prev => !prev);
  };
  const changeBackgroundColor = onColor => {
    return onColor ? '#eee4d4' : '#9e887c';
  };

  return (
    <li
      onColor={onColor}
      setOnColor={setOnColor}
      onClick={switchFilter}
      style={{ backgroundColor: `${changeBackgroundColor(onColor)}` }}
    >
      {props.title}
    </li>
  );
};
export default SortFilter;
