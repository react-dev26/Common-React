import React from 'react';
import BigAmenities from 'components/BigAmenities';
import SmallAmenities from 'components/SmallAmenities';
import AmenitiesSectionPhotoGrid from 'components/AmenitiesSectionPhotoGrid';
import Photo from 'components/Photo';

export default class AmenitiesSection extends React.Component {

  render () {
    const classesForPhoto = !!this.props.classesForPhotos ? `object-fit ${this.props.classesForPhotos}` : 'object-fit';
    return (
      <section className="amenities">
        <section className="component intro halves pl0-mobile-tablet pr0-mobile-tablet">
          <section className="component intro half intro-mob-tab pl0-desktop">
            <h1>{this.props.header}</h1>
            {this.props.subheader && <h2>{this.props.subheader}</h2>}
          </section>
          <section className="grid full-width half">
            <div>
              <Photo photo={this.props.mainPhoto} className={classesForPhoto} />
            </div>
          </section>
        </section>
        <BigAmenities
          amenities={this.props.bigAmenities}
        />
        <section className="small-amenities">
          <div className="header">
            <h3>Common {this.props.homeName} Amenities</h3>
          </div>
          <SmallAmenities
            amenities={this.props.smallAmenities}
          />
        </section>
        <AmenitiesSectionPhotoGrid
          photos={this.props.photos}
        />
      </section>
    )
  }
}
