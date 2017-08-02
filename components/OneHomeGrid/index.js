import Photo from 'components/Photo'

export default ({ home }) => {
  return (
    <div className='photo-grid one-home desktop'>
      <a href={'/' + home.urlSlug } className='home big-home pr0'>
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
            {home.amenitiesForCityPage.slice(0,8).map(function(amenity, i) {
              return <li key={i}>{ amenity.header }</li>
            })}
          </ul>
          <div className='price'>
            <p>From<br/><span className='number'>
              ${Number(home.startingMonthlyFee).toLocaleString('USD')}/month
            </span></p>
          </div>
          {home.isPendingHome &&
              <span className="coming-soon">Opening soon</span>}
        </div>
      </a>
    </div>
  )
}
