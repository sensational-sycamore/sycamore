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
    console.log('ss')
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    this.setState({ showMenu: !this.state.showMenu }, () => {
      if (this.state.showMenu) {

        document.addEventListener('click', this.toggleMenu);
      }
    });
  }


  render() {
    const { options, clickHandler } = this.props;

    return (
      <div>
        <div onClick={this.toggleMenu}>
          Show Menu
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