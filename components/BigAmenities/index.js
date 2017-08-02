import React from 'react';
import Photo from 'components/Photo';

export default class BigAmenities extends React.Component {
  renderBigAmenities(amenities) {
    return amenities.map((amenity, id) => {
      return (
        <div className="amenity" key={id}>
          <div className="image-container" key={`${id}-img-container`}>
            <Photo key={amenity.id} photo={{oneXPhoto: {url: amenity.icon.url}}} />
          </div>
          <div className="content" key={`${id}-content`}>
            <h3 key={`${id}-header`}>{amenity.header}</h3>
            <p key={`${id}-description`}>{amenity.description}</p>
          </div>
        </div>
      )
    });
  }
  render() {
    return (
      <section className="big-amenities">
        {this.renderBigAmenities(this.props.amenities)}
      </section>
    );
  }
}

//BigAmenities.propTypes = {amenities: bigAmenitiesPropType.isRequired}

