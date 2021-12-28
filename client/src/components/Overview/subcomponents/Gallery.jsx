import React from 'react';

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
      <div>
        <img style={{width: 300}} src={this.state.currImage} alt="" />
        {currStyle.photos.map(photo => (
          <img onClick={() => this.handleImageSelect(photo)}style={{width: 50}} src={photo.thumbnail_url} alt="" key={photo.url}/>
        ))}
      </div>
    );
  }
}

export default Gallery;