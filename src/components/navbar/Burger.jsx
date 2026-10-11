import React from 'react';
import { bool, func } from 'prop-types';

export function Burger({ open, setOpen }) {
  return (
    <button
      className={`burger${open ? ' burger--open' : ''}`}
      onClick={() => setOpen(!open)}
    >
      <div />
      <div />
      <div />
    </button>
  );
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
