import PropTypes from 'prop-types';
import { leaseableUnitPropType } from 'lib/proptypes';
import LeaseableUnitOverviewInformation from 'components/LeaseableUnitOverviewInformation';
import LeaseableUnitOverviewAmenities from 'components/LeaseableUnitOverviewAmenities';
import Scroll from 'react-scroll';
import styleVariables from 'lib/styleVariables';
const { mobileHeaderHeight, desktopHeaderHeight, desktop } = styleVariables;

class LeaseableUnitOverview extends React.Component {
  render() {
    if (typeof window !== 'undefined') {
      const isDesktop = window.innerWidth >= desktop;
      var headerHeight = isDesktop ? desktopHeaderHeight : mobileHeaderHeight;
    }
    return (
      <div
        className={`price elements-${this.props.numberOfLeaseableUnits} col`} id="teal-box" >
        <LeaseableUnitOverviewInformation
          leaseableUnit={this.props.leaseableUnit}
          numberOfLeaseableUnits={this.props.numberOfLeaseableUnits}
        />
        <LeaseableUnitOverviewAmenities
          leaseableUnit={this.props.leaseableUnit}
          numberOfLeaseableUnits={this.props.numberOfLeaseableUnits}
        />
        <Scroll.Link
          to={this.props.leaseableUnit.name.replace(/\s+/g, '-').toLowerCase()}
          offset={-20 - headerHeight}
          duration={1000}
          smooth={true}
          className="btn btn-wht btn-lg learn-more show-1-mobile"
          key={`${this.props.leaseableUnit.id}-learn`}>
          LEARN MORE
        </Scroll.Link>
        <style jsx>
        {`
          #teal-box {
            padding-top: 20px !important;
          }
        `}
        </style>
      </div>
    );
  }
}

LeaseableUnitOverview.propTypes = {
  leaseableUnit: leaseableUnitPropType.isRequired,
  numberOfLeaseableUnits: PropTypes.number.isRequired
};

export default LeaseableUnitOverview;
