// src/components/Menu/Menu.js
import React from 'react';
import { Button } from '../Button';
import { bool } from 'prop-types';

export function Menu({ open }) {
  return (
    <nav className={`menu${open ? ' menu--open' : ''}`}>
        <a href="#servizi">Servizi</a>
        <a href="#works">Portfolio</a>
        <a href="#howwork">Come Lavoro</a>
        <a href="#servizi">Servizi</a>
        <div className="menu-actions">
            <Button message="Scrivimi" href={"#contatti"}/>
        </div>
    </nav>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};
