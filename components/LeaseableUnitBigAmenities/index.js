import React from 'react';
import PropTypes from 'prop-types';

class LeaseableUnitBigAmenities extends React.Component {
  renderBigAmenities(amenities) {
    return amenities.map((amenity) => {
      return (
        <h3 className="amenity" key={amenity.id}>{amenity.header}</h3>
      )
    });
  }

  render() {
    return (
      <div className="big-amenities">
        {this.renderBigAmenities(this.props.amenities)}
      </div>
    )
  }
}

LeaseableUnitBigAmenities.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.shape({
    header: PropTypes.string.isRequired
  })).isRequired
}

export default LeaseableUnitBigAmenities;
