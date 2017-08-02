import React from 'react';
import Photo from 'components/Photo';

export default class AmenitiesSectionPhotoGrid extends React.Component {
  chunkPhotoGridsArray(photos) {
    const chunkedPhotos = [];
    const chunk = 2;
    for (let i=0; i<photos.length; i+=chunk) {
      chunkedPhotos.push(photos.slice(i, i + chunk));
    }
    return chunkedPhotos;
  }
  renderPhotos(photos, indexOfGrid) {
    return photos.map((photo, indexOfPhoto) => {
      const photoSize = (indexOfGrid % 2 === 0 && indexOfPhoto % 2 === 0) ||
        (indexOfGrid % 2 !== 0 && indexOfPhoto % 2 !== 0) ? 'big' : 'small';
      const classesForPhoto = !!this.props.classesForPhotos ? `object-fit ${this.props.classesForPhotos}` : 'object-fit';
      return (
        <div className={photoSize} key={indexOfPhoto}>
          <Photo photo={photo} key={indexOfPhoto} className={classesForPhoto} />
        </div>
      )
    });
  }
  renderPhotoGrids(photos) {
    if (photos.length % 2 !== 0) {
      photos.pop();
    }
    const photoGrids = this.chunkPhotoGridsArray(photos);
    return photoGrids.map((photoGrid, indexOfGrid) => {
      return (
        <div key={`photo-grid-${indexOfGrid}`} className="grid single-row full-width">
          {this.renderPhotos(photoGrid, indexOfGrid)}
        </div>
      )
    });
  }

  render() {
    return (
      <section className="photo-grids">
        {this.renderPhotoGrids(this.props.photos)}
      </section>
    );
  }
}

/*AmenitiesSectionPhotoGrid.propTypes = {
  photos: PropTypes.arrayOf(Photo.propTypes.photo).isRequired
}*/
