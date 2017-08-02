import ApplyButton from 'components/ApplyButton';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';
import Photo from 'components/Photo';

export default ({ cities, cityName, home, partner, isFixed, isProductPage }) => {
  const partnerName = (partner && partner.name) || null;
  const homeName = home && home.name || null;
  const applyButtonPath = new ApplyButtonPathHelper({
    home: homeName,
    city: cityName || home && home.neighborhood.city.name,
    partnerReferral: partnerName
  }).fullPath;
  const headerClass = isFixed ? 'fixed' : '';
  const applyButton = (
    <ApplyButton
      opts={
        {
          classes: 'btn btn-red btn-lg',
          id: 'header-apply-button',
          path: applyButtonPath
        }
      }
      text='Request a Call'
    />
  );
  return (
    <div>
      <header id='header' className={headerClass}>
        <nav className='container'>
          <a href='/' className='logo header-link'>
            <Photo photo={
              {
                oneXPhoto: {
                  url: '/static/images/common-logo.svg'
                },
                altText: 'Common Living Inc.'
              }
            } />
          </a>
          <ul className='main-nav'>
            <li className='header-link homes-link no-highlight'>
              <a className='homes red-on-hover-desktop '>
                <span>Homes<span className='arrow'>▾</span></span>
              </a>
            </li>
            <li className='mob-homes-nav-container'>
              <ul className='homes-nav mob-tab'>
                {cities.map((city, i) => (
                  <li className='city' key={i}>
                    <a className='red-on-hover-desktop' href={`/${city.urlSlug}`}>{city.name}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li className='header-link'>
              <a className='red-on-hover-desktop' href='/membership'>Membership</a>
            </li>
            <li className='header-link'>
              <a className='red-on-hover-desktop' href='/community'>Community</a>
            </li>
          </ul>
          <button id='hamburger-menu' className='hamburger hamburger--slider no-highlight' type='button'>
            <span className='hamburger-box'> <span className='hamburger-inner'></span> </span>
          </button>
          {(!isFixed && isProductPage) ? null : applyButton}
          <ul className='homes-nav desktop'>
            {cities.map((city, i) => (
              <li className='city' key={i}>
                <a className='red-on-hover-desktop' href={`/${city.urlSlug}`}>{city.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </div>
  )
}
