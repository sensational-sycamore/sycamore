import React from 'react';
import css from '../styles/dropDown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown} from '@fortawesome/free-solid-svg-icons';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.selectOption = this.selectOption.bind(this);
  }

  toggleMenu(e) {
    this.setState({ showMenu: !this.state.showMenu});
  }

  selectOption(option) {
    console.log('selected option');
    this.props.clickHandler(option);
    this.setState({ showMenu: false});
  }

  render() {
    const { options, clickHandler, mainMessage } = this.props;

    return (
      <div className={css.dropDownContainer}>
        <div onClick={this.toggleMenu} className={css.dropDownButton}>
          <div class={css.mainMessage}>{mainMessage}</div>
          <div className={css.downIcon}>
            <FontAwesomeIcon icon={faChevronDown} color="black" size="sm"/>
          </div>
        </div>


        {
          this.state.showMenu ? (
            <div className={css.menu}>
              {Object.keys(options).map(option => <div className={css.dropDownOptions} key={option} onClick={() => this.selectOption(option)}>{options[option]}</div>)}
            </div>
          )
            : ( null )
        }
      </div>
    );
  }
}

export default Dropdown;
