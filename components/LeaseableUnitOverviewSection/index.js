import LeaseableUnitsOverview from 'components/LeaseableUnitsOverview'

// TODO: Figure out where this is being called an make sure the right props
// are passed in.
export default class extends React.Component {
  renderOverviewSection(leaseableUnits) {
    return (
      <LeaseableUnitsOverview leaseableUnits={leaseableUnits} />
    )
  }
  render() {
    const overviewComponents = this.renderOverviewSection(this.props.leaseableUnitTypes);
    return (
      <section className="leaseable-unit-overview">
        {overviewComponents}
      </section>
    )
  }
}

//LeaseableUnitOverviewSection.propTypes = {
  //leaseableUnitTypes: PropTypes.arrayOf(leaseableUnitPropType).isRequired
//}
