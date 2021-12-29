import React from 'react';
// import css from '../styles/sizeSelector.module.css';

class Dropdown extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      showMenu: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.closeMemu);
  }

  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener('click', this.closeMemu);
    });
  }

  toggleMenu(e) {
    e.stopPropagation();
    this.setState({ showMenu: !this.state.showMenu }, () => {
      if (this.state.showMenu) {

        document.addEventListener('click', this.toggleMenu);
      }
    });
  }


  render() {
    const { options, clickHandler, mainMessage } = this.props;

    return (
      <div>
        <div onClick={this.toggleMenu}>
          {mainMessage}
        </div>


        {
          this.state.showMenu ? (
            <div className="menu">
              {Object.keys(options).map(option => <div key={option} onClick={() => clickHandler(option)}>{options[option]}</div>)}
            </div>
          )
            : ( null )
        }
      </div>
    );
  }
}

export default Dropdown;
