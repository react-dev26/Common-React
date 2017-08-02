import React from 'react';
import LeaseableUnitHeaderSection from 'components/LeaseableUnitHeaderSection';
import LeaseableUnitPhotoGrid from 'components/LeaseableUnitPhotoGrid';
import SmallAmenities from 'components/SmallAmenities';
import PropTypes from 'prop-types';
import { leaseableUnitPropType, homePropType } from 'lib/proptypes';

class LeaseableUnit extends React.Component {
  renderSmallAmenitiesFootnotes(footnotes) {
    return (
      <ul className="footnotes" key={footnotes.id}>
        {footnotes.map((footnote, index) => {
          return (
            <li key={index}>{footnote}</li>
          )
        })}
      </ul>
    )
  }
  render() {
    return (
      <section className="component leaseable-unit" id={this.props.leaseableUnit.name.replace(/\s+/g, '-').toLowerCase()} key={this.props.leaseableUnit.id}>
        <LeaseableUnitHeaderSection
          leaseableUnit={this.props.leaseableUnit}
          home={this.props.home}
        />
        <section className="text-overview" key={`${this.props.leaseableUnit.id}-text-overview`}>
          {this.props.leaseableUnit.description &&
            <p className="text-center" dangerouslySetInnerHTML={{__html: this.props.leaseableUnit.description}} key={`${this.props.leaseableUnit.id}`}></p>
          }
          <section className="small-amenities" key={`${this.props.leaseableUnit.id}-amenities`}>
            {this.props.leaseableUnit.smallAmenities && this.props.leaseableUnit.smallAmenities.length
              && <SmallAmenities
                amenities={this.props.leaseableUnit.smallAmenities}
              />}
            {this.props.leaseableUnit.smallAmenitiesFootnotes && this.props.leaseableUnit.smallAmenitiesFootnotes.length
              && this.renderSmallAmenitiesFootnotes(this.props.leaseableUnit.smallAmenitiesFootnotes)}
          </section>
        </section>
        {this.props.leaseableUnit.photoGrid.length &&
          <LeaseableUnitPhotoGrid
            photos={this.props.leaseableUnit.photoGrid}
          />}
      </section>
    )
  }
}

LeaseableUnit.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
  home: homePropType.isRequired
}

export default LeaseableUnit;
