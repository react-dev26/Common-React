import React                  from 'react'
import NeighborhoodSlide      from 'components/NeighborhoodSlide'
import NeighborhoodsPrevArrow from 'components/NeighborhoodsPrevArrow'
import NeighborhoodsNextArrow from 'components/NeighborhoodsNextArrow'
import Carousel               from 'nuka-carousel-custom';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onWindowResized = this.onWindowResized.bind(this);
  };

  componentDidMount() {
    window.addEventListener('resize', this.onWindowResized);
    this.setState({ width: window.innerWidth})
  }


  componentWillUnmount () {
    window.removeEventListener('resize', this.onWindowResized);
  }

  onWindowResized() { //add debounce fotruer performance?
    this.setState({ width: window.innerWidth})
    this.forceUpdate(); //react's default forceUpdate
  }

  render() {
    const {type, homes, numHomesToShow } = this.props;

    const slides = homes.map( (home, i) => (<div key={i} ><NeighborhoodSlide key={home.name} home={home} /></div>) );

    const isTablet = this.state.width >= 1024;
    const isMobile = this.state.width >= 768;
    const responsiveNumHomesToShow = isTablet ? numHomesToShow : ( isMobile ? ( numHomesToShow >= 2 ? 2 : 1 ) : 1 );

    const showArrows = homes.length > responsiveNumHomesToShow && isTablet;
    const showDots = homes.length > responsiveNumHomesToShow;
    const style = this.props.shouldHide ? {display: 'none'} : {};
    return (
      <div style={style}>
        <Carousel
          decorators={ showDots ? ( showArrows ? Carousel.getDefaultProps().decorators : Carousel.getDefaultProps().decorators.slice(2) ) : [] }
          slidesToShow={responsiveNumHomesToShow}
          wrapAround={responsiveNumHomesToShow > 1}
          autoplay={showDots}
          autoplayInterval={6000}
        >
          {slides}
        </Carousel>
        <style jsx>{`
          .theslider {
            height:390px;
          }
        `}</style>
      </div>
    );
  }
}
