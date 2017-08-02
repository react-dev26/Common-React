import React from 'react';
import Photo from 'components/Photo';
import LeaseableUnitHeaderSectionInfoHalf from 'components/LeaseableUnitHeaderSectionInfoHalf';
import PropTypes from 'prop-types';
import { leaseableUnitPropType, homePropType } from 'lib/proptypes';

class LeaseableUnitHeaderSection extends React.Component {
  render() {
    return (
      <section className="grid single-row full-width accommodation-overview" key={`${this.props.leaseableUnit.id}-overview`}>
        <LeaseableUnitHeaderSectionInfoHalf
          leaseableUnit={this.props.leaseableUnit}
          home={this.props.home}
        />
        <div className="image-half" key={`${this.props.leaseableUnit.id}-image-half`}>
          <Photo
            className="object-fit"
            photo={this.props.leaseableUnit.mainPhoto}
            key={`${this.props.leaseableUnit.id}-photo`}
          />
        </div>
      </section>
    );
  }
}

LeaseableUnitHeaderSection.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
  home: homePropType.isRequired
}

export default LeaseableUnitHeaderSection;
