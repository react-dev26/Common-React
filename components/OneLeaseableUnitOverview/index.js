export default ({ leaseableUnit, onlyOne }) => {
  const amenities = leaseableUnit.priceSectionOverviewAmenities.map((el) => (el.header))
  return (
    <div className='flex-grow'>
    { onlyOne && <div className="cf pa5-l pa4 unitsContainer mv3">
      <div className="fl w-30-l w-100 pr4-l home-overview">
        <div className="pb2 pb5-l tc tl-l ">
          <h1 className="leaseableUnitName">{leaseableUnit.name}</h1>
        <div className='monthlyFee pt2'>from ${leaseableUnit.monthlyFee.toLocaleString('USD')}/month</div>
        </div>
        <div className="dn db-l">
          <a className="btn btn-wht btn-lg learn-more">Learn more</a>
        </div>
      </div>
      <div className="fl w-70-l tc tl-l w-100 home-information">
        <div className="pb2 dn db-l" dangerouslySetInnerHTML={{__html: leaseableUnit.priceSectionOverviewDescription}}></div>
        <div>
          <ul className="amenities mw5-m">
            <div className='fl-l cf w-50-l w-100'>
              { amenities[0] && <li className='tl mb2'><span className='amenityElement'>{amenities[0]}</span></li> }
              { amenities[1] && <li className='tl mb2'><span className='amenityElement'>{amenities[1]}</span></li> }
            </div>
            <div className='fl-l cf w-50-l w-100'>
              { amenities[2] && <li className='tl mb2'><span className='amenityElement'>{amenities[2]}</span></li> }
              { amenities[3] && <li className='tl mb2'><span className='amenityElement'>{amenities[3]}</span></li> }
            </div>
          </ul>
        </div>
      </div>
      <div className="db dn-l tc">
        <a className="btn btn-wht btn-lg learn-more">Learn more</a>
      </div>
    </div> }
    { !onlyOne && <div className='cf ma2'>
      <div className="cf pa4 unitsContainer">
        <div className="cf tc w-100 home-overview">
          <div className="pb2 tc">
            <h1 className="">{leaseableUnit.name}</h1>
            <div className='monthlyFee'>
              <p className='white pt2'>from ${leaseableUnit.monthlyFee}/month</p>
            </div>
          </div>
        </div>
        <div className="tc dn db-l w-100 home-information">
          <div>
            <ul className="amenities cf center">
              {amenities.map((amenity, i) => (
                <li className='tl mb2' key={i}><span className='amenityElement'>{amenity}</span></li>  
              ))}
            </ul>
          </div>
        </div>
        <div className="db tc">
          <a className="btn btn-wht btn-lg learn-more">Learn more</a>
        </div>
      </div>
    </div> }
    <style jsx>{`
      .flex-grow {
        flex-grow:1;
      }
      .unitsContainer {
        background-color: #728788;
      }
      .amenityElement {
        box-sizing: border-box;
        color: rgb(255, 255, 255);
        display: inline;
        font-family: "Titillium Web", sans-serif;
        font-kerning: normal;
        font-size: 16px;
        font-weight: 300;
        height: auto;
        line-height: 24.8px;
        list-style-image: url(/static/images/icons/checkmark.svg);
        list-style-position: inside;
        list-style-type: disc;
        text-align: left;
        text-size-adjust: 100%;
        width: auto;
        -webkit-box-direction: normal;
        -webkit-font-smoothing: antialiased;
      }

      .leaseableUnitName {
        box-sizing:border-box;
        color:rgb(255, 255, 255);
        display:block;
        font-family:"Titillium Web", sans-serif;
        font-kerning:normal;
        font-size:32px;
        font-weight:300;
        height:32px;
        letter-spacing:normal;
        line-height:32px;
        margin-bottom:12px;
        margin-top:0px;
        max-width:700px;
        text-align:left;
        text-size-adjust:100%;
        width:102.984px;
        -webkit-box-direction:normal;
        -webkit-font-smoothing:antialiased;
        -webkit-margin-after:12px;
        -webkit-margin-before:0px;
        -webkit-margin-end:0px;
        -webkit-margin-start:0px;
      }

      .monthlyFee {
        font-size:1.625em !important;
        color: white !important;
        font-family: Lato, sans-serif;
        font-kerning: normal;
        font-size: 26px;
        font-weight: 300;
        letter-spacing: normal;
        line-height: 26px;
        margin-bottom: 0px;
        margin-left: 0px;
        margin-right: 0px;
        margin-top: 0px;
        opacity: 0.9;
        text-size-adjust: 100%;
        display:inline-block;
        -webkit-box-direction: normal;
        -webkit-font-smoothing: antialiased;
        -webkit-margin-after: 0px;
        -webkit-margin-before: 0px;
        -webkit-margin-end: 0px;
        -webkit-margin-start: 0px;
      }
      p {
        color: white !important;
      }

      h1 {
        font-size: 2em;
        color: white !important;
      }
      a {
        width: auto;
        margin-bottom: 0;
        border: none;
        color: #728788;
      }
      a:hover {
        background-color: white;
        color: #728788;
      }
      .amenities {
        list-style-image: url(https://www.common.com/images/icons/checkmark-73838279.svg);
      }
      .home-information {
        font-size: 1.5em;
      }
    `}</style>
    </div>
  )
}
