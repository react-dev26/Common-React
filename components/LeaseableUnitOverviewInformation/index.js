import PropTypes from 'prop-types';
import { leaseableUnitPropType } from 'lib/proptypes';

class LeaseableUnitOverviewInformation extends React.Component {
  hasFootnotes(leaseableUnit) {
    return !!leaseableUnit.priceSectionOverviewFootnotes
      && !!leaseableUnit.priceSectionOverviewFootnotes.length;
  }
  renderPriceInformation() {
    return (
      <div className="information" key={`${this.props.leaseableUnit.id}-information`} >
        <p key={`${this.props.leaseableUnit.id}`} >
          from ${this.props.leaseableUnit.monthlyFee.toLocaleString('USD')}/month{this.hasFootnotes(this.props.leaseableUnit) ? '*' : ''}
        </p>
      </div>
    );
  }
  render() {
    return (
      <div className="overview" key={`${this.props.leaseableUnit.id}-overview`} >
        <h3 className="type" key={`${this.props.leaseableUnit.id}-name`} >
          {this.props.leaseableUnit.name}
        </h3>
        {this.renderPriceInformation()}
        {this.props.numberOfLeaseableUnits === 1 &&
          <a
            className="btn btn-wht btn-lg learn-more show-1-desktop"
            data-scroll
            href={`#${this.props.leaseableUnit.name.replace(/\s+/g, '-').toLowerCase()}`}
            key={`${this.props.leaseableUnit.id}-learn`}
          >
            LEARN MORE
          </a>}
      </div>
    );
  }
}

LeaseableUnitOverviewInformation.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
  numberOfLeaseableUnits: PropTypes.number.isRequired
}

export default LeaseableUnitOverviewInformation;
