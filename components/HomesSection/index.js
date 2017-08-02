import NeighborhoodsSlider from 'components/NeighborhoodsSlider'
import NeighborhoodSlide from 'components/NeighborhoodSlide'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCityIndex: 0
    };
  }

  selectCity (index) {
    this.setState({ currentCityIndex: index })
  }

  render () {
    const { currentCityIndex } = this.state
    const { cities } = this.props

    const sliderData = cities.filter((city) => !city.homes.every(home => home.isPendingHome)).map((city) => ({
      name: city.name,
      homes: city.homes.filter((home) => !home.isPendingHome).map((home) => (
        {
          name: home.name,
          neighborhood: home.neighborhood.name,
          photo: home.photoUsedOnCityHomesSlider,
          pageLink: `/${home.urlSlug}`
        }
      ))
    }))

    const currentCity = sliderData[currentCityIndex]
    const maxNumHomesToShow = 3

    return (
      <section className='section section-homes'>
        <div className='inner'>
          <h2>Browse our homes by city</h2>
          <ul className="cities">
            {sliderData.map((city, i) => (
              <li key={i}>
                <a className={currentCityIndex === i && 'active'} onClick={this.selectCity.bind(this, i)}>
                  {city.name}
                </a>
              </li>
            ))}
          </ul>
          {sliderData.map((city, i) => (
            <NeighborhoodsSlider
              numHomesToShow={currentCity.homes.length >= maxNumHomesToShow ? maxNumHomesToShow : currentCity.homes.length}
              homes={currentCity.homes}
              shouldHide={currentCityIndex !== i}
            />
          ))}
        </div>
      </section>)
  }
}
