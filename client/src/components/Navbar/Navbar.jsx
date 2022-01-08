import React from 'react';
import css from './navbar.module.css';
import img from '../../public/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const search = <FontAwesomeIcon icon={faSearch} size="xs"/>;

  return (
    <div className={css.navbarContainer}>
      <img className={css.logo} src={img} alt="" />
      <h1 className={css.title}>Sycamore</h1>
    </div>
  );
};


export default Navbar;
