import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let className = this.props.className || '';
    if (this.props.lazyload) {
      className = `lazyload ${className}`;
    }

    const imgProps = {};
    if (this.props.lazyload) {
      imgProps['src'] = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
      imgProps['data-src'] = this.props.photo.oneXPhoto.url;
      if (this.props.photo.twoXPhoto && this.props.photo.twoXPhoto.url) {
        imgProps['data-srcset'] = `${this.props.photo.oneXPhoto.url} 1x, ${this.props.photo.twoXPhoto.url} 2x`;
      }
    } else {
      imgProps['src'] = this.props.photo.oneXPhoto.url;
      if (this.props.photo.twoXPhoto && this.props.photo.twoXPhoto.url) {
        imgProps['srcSet'] = `${this.props.photo.oneXPhoto.url} 1x, ${this.props.photo.twoXPhoto.url} 2x`;
      }
    }
    if (this.props.photo.altText) {
      imgProps['alt'] = this.props.photo.altText;
    }
    return (
      <img className={className} {...imgProps} />
    )
  }
}