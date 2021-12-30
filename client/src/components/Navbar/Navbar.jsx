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
      <form action="#" className={css.searchContainer}>
        <input type="text" className={css.input} />
        <div className={css.searchIcon}>{search}</div>
      </form>
    </div>
  );
};


export default Navbar;