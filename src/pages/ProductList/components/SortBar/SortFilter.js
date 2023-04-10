import React, { useState } from 'react';

const SortFilter = () => {
  const [onColor, setOnColor] = useState(false);

  return <div onColor={onColor} setOnColor={setOnColor} />;
};
export default SortFilter;
