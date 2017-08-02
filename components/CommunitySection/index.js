import React from 'react'
import FullBleedPhotoWithHeaders from 'components/FullBleedPhotoWithHeaders'
import Photo from 'components/Photo';

export default class CommunitySection extends React.Component {
  renderDescriptionSection(description) {
    return (
      <section className="component center">
        <h3 dangerouslySetInnerHTML={{__html: description}}></h3>
      </section>
    )
  }
  renderPhotoGrid(photos) {
    if (photos.length % 2 !== 0) { photos.pop() }
    return (
      <section className="grid mosaic two-by-two">
        {photos.map((photo, id) => {
          return (
            <div key={id}>
              <Photo
                className={this.props.classesForPhotos}
                key={`${id}-photo`}
                photo={photo}
              />
              <p className="caption text-left pl0 pt0" key={`${photo.id}-caption`}>
                {photo.caption}
              </p>
            </div>
          )
        })}
      </section>
    )
  }
  render () {
    return (
      <section className="community">
        <FullBleedPhotoWithHeaders
          headerPhoto={this.props.fullBleedPhoto}
          header={this.props.header}
          subheader={this.props.subheader}
          shouldLazyloadPhotos={true}
          classesForPhotos= 'object-fit' />
        {this.props.description && this.renderDescriptionSection(this.props.description)}
        {this.props.photoGrid && this.props.photoGrid.length >= 2 && this.renderPhotoGrid(this.props.photoGrid)}
      </section>
    )
  }
}
