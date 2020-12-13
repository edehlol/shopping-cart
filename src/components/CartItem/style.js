import React from 'react';

export const Product = ({ children }) => {
  return <li className="flex mb-8 justify-between">{children}</li>;
};
export const Thumbnail = ({ src }) => {
  return <img className="w-28 h-28 rounded-xl" src={src} />;
};
export const ProductInfo = ({ children }) => {
  return <div>{children}</div>;
};
export const Title = ({ children }) => {
  return <h2 className="text-lg">{children}</h2>;
};
export const Description = ({ children }) => {
  return <p className="text-xs text-gray-400">{children}</p>;
};
export const PriceAndQuantity = ({ children }) => {
  return <div className="flex flex-col items-center">{children}</div>;
};
export const Price = ({ children }) => {
  return <p className="text-lg  font-semibold">${children}</p>;
};
export const Quantity = () => {
  return (
    <select className="bg-gray-100 px-4 py-2 rounded-xl">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
  );
};
