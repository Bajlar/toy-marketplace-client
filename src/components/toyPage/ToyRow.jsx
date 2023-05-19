import React from 'react';

const ToyRow = ({ toy }) => {
  console.log(toy);
  const { sellerName, toyName, quantity, price, category } = toy;

  return (
    <tr>
      <td>{sellerName}</td>
      <td>{toyName}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{category}</td>
      <td><button className='btn btn-secondary'>Details</button></td>
    </tr>
  );
};

export default ToyRow;