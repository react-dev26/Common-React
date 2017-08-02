import React from 'react';
import FullBleedPhotoWithHeaders from 'components/FullBleedPhotoWithHeaders';
import Photo from 'components/Photo';


export default class NeighborhoodSection extends React.Component {
  renderSubwayIcons(icons) {
    return (
      <div className="subway-row">
        {icons.map((icon, id)=> {
          return (
            <div key={id}>
              <Photo
                photo={icon}
                className={!!this.props.classesForPhotos ? this.props.classesForPhotos+' mw4' : 'mw4'}
              />
            </div>
          )
        })}
      </div>
    )
  }
  renderShowcaseRows(showcaseRows) {
    return showcaseRows.map((row, index) => {
      const classesForRow = index % 2 === 0 ? 'mb0' : 'mt0';
      const classesForImageHalf = index % 2 === 0 ? '' : 'mt0-mobile-tablet';
      const headerClasses = row.subwayIcons ? 'm0 text-center-desktop has-subway-row' : 'm0';
      const descriptionClasses = row.subwayIcons ? 'm0 text-center-desktop' : 'm0';
      const classesForPhoto = !!this.props.classesForPhotos ? `object-fit ${this.props.classesForPhotos}` : 'object-fit';

      return (
        <section className={`one-by-two halves grid ${classesForRow}`} key={index}>
          <div className="half image" key={`${index}-image`}>
            <Photo photo={row.photo} key={row.photo.id} className={classesForPhoto} />
          </div>
          <div className={`half text-content ${classesForImageHalf}`} key={`${index}-text`}>
            {row.subwayIcons &&
              this.renderSubwayIcons(row.subwayIcons)}
            <h2 className={headerClasses} dangerouslySetInnerHTML={{__html: row.header}} key={`${index}-header`}></h2>
            <p className={descriptionClasses} dangerouslySetInnerHTML={{__html: row.description}} key={`${index}-description`}></p>
          </div>
        </section>
      )
    });
  }
  render() {
    return (
      <section className="neighborhood">
        <FullBleedPhotoWithHeaders
          headerPhoto={this.props.fullBleedPhoto}
          header={this.props.header}
          subheader={this.props.subheader}
          shouldLazyloadPhotos={true}
          classesForPhotos='object-fit' />
        <section className="showcase">
          {this.renderShowcaseRows(this.props.showcaseRows)}
        </section>
        {this.props.mapSection &&
          <section className="map"
            data-lat={this.props.mapSection.locationToBeDisplayed.lat}
            data-lng={this.props.mapSection.locationToBeDisplayed.lon}
            data-zoom="15"
            data-radius="321.869">
          </section>}
      </section>
    )
  }
}

/*NeighborhoodSection.propTypes = {
  fullBleedPhoto: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  subheader: PropTypes.string,
  showcaseRows: PropTypes.arrayOf(PropTypes.shape({
    subwayIcons: PropTypes.arrayOf(Photo.propTypes.photo),
    photo: Photo.propTypes.photo.isRequired,
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
  })),
  mapSection: PropTypes.shape({
    locationToBeDisplayed: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lon: PropTypes.number.isRequired
    }).isRequired
  })
}*/
