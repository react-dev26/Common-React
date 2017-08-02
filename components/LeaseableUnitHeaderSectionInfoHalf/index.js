import React from 'react';
import ApplyButton from 'components/ApplyButton';
import LeaseableUnitFootnotes from 'components/LeaseableUnitFootnotes';
import LeaseableUnitBigAmenities from 'components/LeaseableUnitBigAmenities';
import PropTypes from 'prop-types';
import { leaseableUnitPropType, homePropType } from 'lib/proptypes';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';

class LeaseableUnitHeaderSectionInfoHalf extends React.Component {
  hasFootnotes(leaseableUnit) {
    return leaseableUnit.leaseableUnitFootnotes && leaseableUnit.leaseableUnitFootnotes.length;
  }
  render() {
    const pathHelper = new ApplyButtonPathHelper({
      home: this.props.home.name,
      city: this.props.home.neighborhood.city.name,
      suiteType: this.props.leaseableUnit.name
    });
    return (
      <div className="info-half" key={`${this.props.leaseableUnit.id}-info-half`}>
        <div className="container" key={this.props.leaseableUnit.id}>
          <h1 key={`${this.props.leaseableUnit.id}-name`}>{this.props.leaseableUnit.name}</h1>
          <h2 key={`${this.props.leaseableUnit.id}-monthly-fee`}>From ${this.props.leaseableUnit.monthlyFee.toLocaleString('USD')}/month{this.hasFootnotes(this.props.leaseableUnit) ? '*' : ''}</h2>
          {this.props.leaseableUnit.bigAmenities && this.props.leaseableUnit.bigAmenities.length &&
            <LeaseableUnitBigAmenities
              amenities={this.props.leaseableUnit.bigAmenities}
            />}
          <ApplyButton
            opts={{
              classes: 'btn btn-red btn-xl embedded-cta',
              path: pathHelper.fullPath
            }}
            key={`${this.props.leaseableUnit.id}-cta`}
          />
          {this.hasFootnotes(this.props.leaseableUnit) &&
            <LeaseableUnitFootnotes
              footnotes={this.props.leaseableUnit.leaseableUnitFootnotes}
            />}
        </div>
      </div>
    );
  }
}

LeaseableUnitHeaderSectionInfoHalf.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
  home: homePropType.isRequired
}

export default LeaseableUnitHeaderSectionInfoHalf; 
