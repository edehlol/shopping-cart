import React from 'react';

export const Title = ({ children }) => {
  return <h1 className="text-2xl py-8 text-center font-semibold">{children}</h1>;
};
export const List = ({ children }) => {
  return <li className="list-none container max-w-2xl">{children}</li>;
};
