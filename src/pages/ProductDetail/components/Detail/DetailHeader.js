import React from 'react';
import './DetailHeader.scss';

const DetailHeader = ({ name, description, price, id }) => {
  console.log(description);

  return (
    <div className="detailHeader" key={id}>
      <h3 className="goods"> {name}</h3>
      <p>{description}</p>
    </div>
  );
};
export default DetailHeader;
