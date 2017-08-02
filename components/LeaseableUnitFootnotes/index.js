import React from 'react';
import PropTypes from 'prop-types';

class LeaseableUnitFootnotes extends React.Component {
  renderFootnotes(footnotes) {
    return footnotes.map((footnote, index) => {
      return (
        <p className="footnote" dangerouslySetInnerHTML={{__html: footnote}} key={`${footnotes.id}-${index}`}></p>
      )
    });
  }
  render() {
    return (
      <div className="footnotes">
        {this.renderFootnotes(this.props.footnotes)}
      </div>
    )
  }
}

LeaseableUnitFootnotes.propTypes = {
  footnotes: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default LeaseableUnitFootnotes;
