import React from 'react';
import Photo from 'components/Photo';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }
  renderPhotoGrid(photos) {
    if (photos.length % 2 !== 0) {
      photos.pop();
    }
    return photos.map((photo) => {
      return (
        <div key={photo.id}>
          <Photo
            photo={photo}
            key={photo.id}
          />
        </div>
      )
    });
  }

  render() {
    return (
      <section className='grid mosaic leaseable-unit-grid'>
        {this.renderPhotoGrid(this.props.photos)}
      </section>
    )
  }
}