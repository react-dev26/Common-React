export default ({ amenity }) => (
  <div className='flex'>
    <div className={amenity.classes + ' fl amenityIcon mh2 mh0-ns'}></div>
    <div className='fl'>
      <h3 className='amenityHeader'>{amenity.header}</h3>
      <p className='amenityContent' dangerouslySetInnerHTML={{__html: amenity.content}}></p>
    </div>
    <style jsx>{`
      @media screen and (min-width: 48em) {
        .amenityIcon {
          background-repeat: no-repeat;
          background-position: center top;
          min-width:70px;
        }
      }
      @media screen and (max-width: 47.9375em) {
        .amenityIcon {
          background-repeat: no-repeat;
          background-position: center top;
          min-width:95px;
        }
      }
      .amenityIcon {
        background-repeat: no-repeat;
        background-position: center top;
        min-width:70px;
      }
      .amenityHeader{
        font-family: 'Titillium Web', sans-serif;
        font-weight: 600;
        font-size: 1.25em;
        line-height: 20px;
        margin-top: 0;
        margin-bottom: 7px;
      }
      .amenityContent{
        margin-top: 0;
        margin-bottom: 0;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        font-size: 0.8125em;
        line-height: 18px;
        opacity: 1;
      }
      .stay-terms {
        background-image:url('/static/images/membership/1-flexible-terms.svg')
      }
      .make-yourself-home {
        background-image:url('/static/images/membership/2-fully-furnished.svg')
      }
      .utilities {
        background-image:url('/static/images/membership/3-utilities-included.svg')
      }
      .heartbeat {
        background-image:url('/static/images/membership/4-community-events.svg')
      }
      .cooking {
        background-image:url('/static/images/membership/5-superfast-wifi.svg')
      }
      .stocked {
        background-image:url('/static/images/membership/6-share-supplies.svg')
      }
      .laundry {
        background-image:url('/static/images/membership/7-onsite-laundry.svg')
      }
      .bedroom {
        background-image:url('/static/images/membership/8-all-members-vatted.svg')
      }
      .clean-house {
        background-image:url('/static/images/membership/9-cleaning-services.svg')
      }
    `}</style>
  </div>
)
