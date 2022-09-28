import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'
import { BackButton} from '../../components'

function Header() {

  const activeClass = (({ isActive }) => isActive ? 'current' : 'notActive')

  return (

    <>
    <ul>
      <NavLink className={activeClass} to="/" end>Home</NavLink>
      <NavLink className={activeClass} to='tracks'>Tracks</NavLink>
      <NavLink className={activeClass} to="albums">Albums</NavLink>
    </ul>
    <BackButton/>
    </>
  );
}

export default Header;
