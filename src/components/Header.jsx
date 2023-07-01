import React from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

function Header() {
  return (
    <div className="flex flex-col items-center justify-start p-16">
      <h1 className="wordart-wrapper">
        <h1 className="word-art text-5xl">Welcome to My Web Space</h1>
      </h1>
      <nav className="text-yellow-100 my-12">
        <ul className="flex space-x-8 font-mono">
          <li className="cursor-pointer underline underline-offset-4 hover:font-bold">
            <NavLink
              exact
              to="/home"
              activeClassName="font-bold"
              className="cursor-pointer underline underline-offset-4 hover:font-bold"
            >
              Home
            </NavLink>
          </li>
          <li
            className="
            cursor-pointer
            underline
            underline-offset-4
            hover:font-bold
          "
          >
            <NavLink
              exact
              to="/todo"
              activeClassName="font-bold"
              className="cursor-pointe underline underline-offset-4 hover:font-bold"
            >
              To-do
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;