import Photo from 'components/Photo'

export default ({ homes }) => {
  const featureHome = homes.shift();
  return (
    <div className='photo-grid three-homes desktop'>
      <a href={'/' +  featureHome.urlSlug } className='home big-home'>
        <div className='info'>
          <p className='small'>Common</p>
          <h1>{ featureHome.name }</h1>
          <p className='small subcaption'>{ featureHome.neighborhood.name }</p>
          <ul className='amenities'>
            {featureHome.amenitiesForCityPage.slice(0,8).map(function (amenity, i) {
              return <li key={i}>{ amenity.header }</li>
            })}
          </ul>
          <div className='price'>
            <p>From<br></br><span className='number'>
              ${Number(featureHome.startingMonthlyFee).toLocaleString('USD')}/month
            </span></p>
          </div>
          {featureHome.isPendingHome &&
            <span className="coming-soon">Opening soon</span>}
        </div>
        <div className='photo-container'>
          <Photo
            photo={featureHome.photoUsedOnCityPage}
            lazyload={false}
            className='photo object-fit'
          />
        </div>
      </a>

      {homes.map(function(home, i) {
        return <a href={'/' +  home.urlSlug } className='home small-home' key={i}>
          <div className='photo-container'>
            <Photo
              photo={home.photoUsedOnCityPage}
              lazyload={false}
              className='photo object-fit'
            />
          </div>
          <div className='info'>
            <p className='small'>Common</p>
            <h1>{ home.name }</h1>
            <p className='small subcaption'>{ home.neighborhood.name }</p>
            <ul className='amenities'>
              {home.amenitiesForCityPage.slice(0,3).map(function (amenity, ai) {
                return <li key={ai}>{ amenity.header }</li>
              })}
            </ul>
            <div className='price'>
              <p>From <span className='number'>
                ${Number(home.startingMonthlyFee).toLocaleString('USD')}/month
              </span></p>
            </div>
            {home.isPendingHome &&
              <span className="coming-soon">Opening soon</span>}
          </div>
        </a>
      })}
    </div>
  )
}
