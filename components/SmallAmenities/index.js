import React from 'react';
import Photo from 'components/Photo';

export default class SmallAmenities extends React.Component {
  renderSmallAmenities(amenities) {
    return amenities.map((amenity, id) => {
      return (
        <div className="amenity" key={id}>
          <div className="image-container" key={`${id}-img-container`}>
            <Photo photo={{oneXPhoto: {url: amenity.icon.url}}} key={id} />
          </div>
          <span dangerouslySetInnerHTML={{__html: amenity.header}} key={`${id}-header`}></span>
        </div>
      )
    });
  }
  render() {
    return (
      <div className="amenities-row">
        {this.renderSmallAmenities(this.props.amenities)}
      </div>
    );
  }
}

// SmallAmenities.propTypes = {amenities: smallAmenitiesPropType.isRequired}
