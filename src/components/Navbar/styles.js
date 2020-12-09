import React from 'react';

export const Header = ({ children }) => {
  return <header className="h-16 bg-indigo-50 px-8">{children}</header>;
};
export const Nav = ({ children }) => {
  return <nav className="h-16 flex justify-end items-center">{children}</nav>;
};
export const List = ({ children }) => {
  return <ul className="flex flex-row">{children}</ul>;
};
export const ListItem = ({ children }) => {
  return <li className="mr-8 cursor-pointer">{children}</li>;
};
export const CartIcon = () => {
  return (
    <svg
      className="h-6 cursor-pointer"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
      />
    </svg>
  );
};
