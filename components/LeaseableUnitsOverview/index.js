import LeaseableUnitOverview     from 'components/LeaseableUnitOverview'
import PropTypes                 from 'prop-types';
import { leaseableUnitPropType } from 'lib/proptypes';

/**
At the time of writing, we are fully aware that `dangerouslySetInnerHTML`
poses a serious security concern. However, at our current scale, we feel that we
are able to trust the members of the team inputting data into Contentful, and are not
worried that they will be inputting malicous code.
**/

//export default class extends React.Component {
class LeaseableUnitsOverview extends React.Component {
  hasFootnotes(leaseableUnit) {
    return leaseableUnit.priceSectionOverviewFootnotes && leaseableUnit.priceSectionOverviewFootnotes.length;
  }
  renderFootnotes(leaseableUnit) {
    if (this.hasFootnotes(leaseableUnit)) {
      return leaseableUnit.priceSectionOverviewFootnotes.map((footnote, i) => {
        return (
          <p
            className="footnote mb0"
            dangerouslySetInnerHTML={{__html: footnote}}
            key={i}></p>
        );
      });
    }
  }
  renderFootnoteSections(leaseableUnits) {
    return leaseableUnits.map((leaseableUnit, i) => {
      return (
        <div className={`footnotes elements-${leaseableUnits.length} col`} key={i}>
          {this.renderFootnotes(leaseableUnit)}
        </div>
      )
    });
  }

  renderLeaseableUnitOverviews(leaseableUnits) {
    return leaseableUnits.map((leaseableUnit, i) => {
      return (
        <LeaseableUnitOverview
          leaseableUnit={leaseableUnit}
          numberOfLeaseableUnits={leaseableUnits.length}
          key={i}
        />
      );
    });
  }
  render () {
    return (
      <div id="leaseable-section">
        <section className={`pricing prices-${this.props.leaseableUnits.length}`}>
          {this.renderLeaseableUnitOverviews(this.props.leaseableUnits)}
          {this.renderFootnoteSections(this.props.leaseableUnits)}
        </section>
        <style jsx>
        {`
          @media screen and (max-width: 64em) and (min-width: 48em) {
            #leaseable-section .pricing {
                width: 1000px;
            }
          }
        `}
        </style>
      </div>
    )
  }
}

LeaseableUnitsOverview.propTypes = {
  leaseableUnits: PropTypes.arrayOf(leaseableUnitPropType).isRequired
}

export default LeaseableUnitsOverview;
