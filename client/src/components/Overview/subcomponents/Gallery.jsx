import React from 'react';
import GalleryImages from './GalleryImages.jsx';
import css from '../styles/gallery.module.css';

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currImage: this.props.currStyle.photos[0].url
    };

    this.handleImageSelect = this.handleImageSelect.bind(this);
  }

  componentDidUpdate(prevProps) {
    if (this.props.currStyle !== prevProps.currStyle) {
      this.setState({currImage: this.props.currStyle.photos[0].url});
    }
  }

  handleImageSelect(photo) {
    this.setState({
      currImage: photo.url
    });
  }

  render() {
    const { currStyle } = this.props;
    return (
      <div className={css.gallery}>
        <img className={css.hero} src={this.state.currImage} alt="" />
        <div className={css.imageOptions}>
          <GalleryImages handleImageSelect={this.handleImageSelect} photos={currStyle.photos} />
        </div>
      </div>
    );
  }
}

export default Gallery;
