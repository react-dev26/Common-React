import Photo from 'components/Photo'

export default ({ homes }) => {
  return (
    <div className="photo-grid mobile-tablet">
      {homes.map(function (home, i) {
        return <a href={'/' + home.urlSlug } className="home" key={i}>
          <div className="photo-container">
            <Photo
              photo={home.photoUsedOnCityPage}
              lazyload={false}
              className='photo object-fit'
            />
          </div>
          <div className='info'>
            <div className='name'>
              <p className='small'>Common</p>
              <h1>{ home.name }</h1>
            </div>
            <div className='neighborhood-price'>
              <p className='small subcaption'>{ home.neighborhood.name }</p>
              <div className='price'>
                <p>From <span className='number'>${home.startingMonthlyFee.toLocaleString('USD')}/month</span></p>
              </div>
            </div>
            {home.isPendingHome &&
              <span className="coming-soon">Opening soon</span>}
          </div>
        </a>
      })}
      <style jsx>
      {`
        @media screen and (max-width: 64em) and (min-width: 48em) {
          .photo-grid.mobile-tablet .home:nth-child(even) {
            padding-left: 0px !important;
          }
        }
        @media screen and (max-width: 64em) and (min-width: 48em) {
          .photo-grid.mobile-tablet .home {
            margin-bottom: 20px;
          }
        }
      `}
      </style>
    </div>
  )
}
