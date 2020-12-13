import React from 'react';

export const Container = ({ children }) => {
  return <div className="md:mx-8 mx-4 flex flex-col justify-center items-center">{children}</div>;
};
export const Title = ({ children }) => {
  return <h1 className="text-xl ml-6 py-8 text-center font-semibold">{children}</h1>;
};
export const List = ({ children }) => {
  return <ul className="list-none container max-w-xl border-b-2 mb-4">{children}</ul>;
};
export const TotalPrice = ({ children }) => {
  return <div className="flex justify-between text-xl mb-8 max-w-xl w-full">{children}</div>;
};
export const Total = ({ children }) => {
  return <p className="text-gray-400 font-light">{children}</p>;
};
export const Price = ({ children }) => {
  return <p className="font-semibold">${children}</p>;
};
export const ShopLink = ({ children }) => {
  return (
    <p className="mb-16 flex items-center">
      <svg
        className="h-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      {children}
    </p>
  );
};
export const Checkout = () => {
  return (
    <button class="bg-green-400 active:bg-green-600 focus:outline-none py-4 w-5/6 md:w-64 rounded-xl mb-6 font-semibold  flex justify-between items-center px-8 text-lg text-white">
      Checkout
      <svg
        className="h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );
};
