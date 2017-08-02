import React from 'react'

export default class MatterportSection extends React.Component {
  renderTourTitles(tours) {
    return tours.map((tour, index) => {
      return (
        <li className={index === 0 ? 'active' : ''} key={index}>
          <span key={index}>{tour.name}</span>
        </li>
      )
    });
  }
  renderTours(tours) {
    return tours.map((tour, index) => {
      return (
        <iframe className={index === 0 ? 'active' : ''} src={tour.link} frameBorder="0" allowFullScreen key={index}></iframe>
      )
    });
  }

  componentDidMount() {    
    $('.matterport-tour').each(function() {
      const $iframes = $(this).find('.iframe-container iframe');
      const $toggles = $(this).find('.views li');
      new MatterportTour($iframes, $toggles);
    });
  }

  render () {
    return (
      <section className="pv4 ph6-l ph3 component matterport-tour">
        <h3>{this.props.header}</h3>
        <ul className="views" id="tour-options">
          {this.props.tours.length > 1 &&
            this.renderTourTitles(this.props.tours)}
        </ul>
        <div className="iframe-container">
          {this.renderTours(this.props.tours)}
        </div>
        <style jsx>{`
          .matterport-tour {
             max-width: 1300px;
             margin: 0 auto;
             display: -webkit-box;
             display: -moz-box;
             display: box;
             display: -moz-flex;
             display: -ms-flexbox;
             display: flex;
             -webkit-box-orient: vertical;
             box-orient: vertical;
             -webkit-box-direction: normal;
             box-direction: normal;
             -moz-flex-direction: column;
             flex-direction: column;
             -ms-flex-direction: column;
             -webkit-box-align: center;
             box-align: center;
             -moz-align-items: center;
             -ms-align-items: center;
             -o-align-items: center;
             align-items: center;
             -ms-flex-align: center;
             font-size: 16px;
          }
        `}</style>
      </section>
    )
  }
}


/*MatterportSection.propTypes = {
  tours: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired
  })).isRequired,
  header: PropTypes.string.isRequired
}*/
