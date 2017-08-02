import PropTypes from 'prop-types';
import { leaseableUnitPropType } from 'lib/proptypes';

class LeaseableUnitOverviewAmenities extends React.Component {
  renderAmenities(amenities) {
    return amenities.map((amenity, i) => {
      return (
        <li className="perk" key={`${i}-perk`} >
          <span className="perk-text text-left" >
            {amenity.header}
          </span>
        </li>
      );
    });
  }
  renderOverviewAmenities(leaseableUnit) {
    return (
      <ul
        className="perks-list"
        style={{listStyleImage: "url('/static/images/checkmark.svg')" }}
        key={`${leaseableUnit.name}-perk-list`}
      >
        {this.renderAmenities(leaseableUnit.priceSectionOverviewAmenities)}
      </ul>
    );
  }
  render() {
    return (
      <div className="perks" key={`${this.props.leaseableUnit.name}-perks`} >
        {this.props.numberOfLeaseableUnits === 1 && this.props.leaseableUnit.priceSectionOverviewDescription &&
          <h3
          className="perk-caption"
          dangerouslySetInnerHTML={{__html: this.props.leaseableUnit.priceSectionOverviewDescription}}
          key={`${this.props.leaseableUnit.name}-perk-caption`}
          ></h3>
        }
        {this.renderOverviewAmenities(this.props.leaseableUnit)}
      </div>
    );
  }
}

LeaseableUnitOverviewAmenities.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
}

export default LeaseableUnitOverviewAmenities;
