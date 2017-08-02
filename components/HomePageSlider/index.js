import React                   from 'react'
import HomePageSlide           from 'components/HomePageSlide'
import HomePageSliderPrevArrow from 'components/HomePageSliderPrevArrow'
import HomePageSliderNextArrow from 'components/HomePageSliderNextArrow'
import Carousel                from 'nuka-carousel-custom';


export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { mounted: false }
  }

  componentDidMount() {
    this.setState({mounted: true})
  }

  componentWillUnmount() {
    this.setState({mounted: false})
  }

  render() {
    const { slides } = this.props;

    const filteredSlides = slides.filter( (slide) => !slide.video )

    const slideBlocks = filteredSlides.map((slide, i) => (
      <div key={i} >
        <HomePageSlide slide={slide} />
      </div>)
    )

    const decorators = [{
      component: (p) => (
        <HomePageSliderPrevArrow onClick={p.previousSlide} />
      ),
      position: 'CenterLeft'
    }, {
      component: (p) => (
        <HomePageSliderNextArrow onClick={p.nextSlide} />
      ),
      position: 'CenterRight'
    }];

    return (
      <div>
        <Carousel
          className='theslider'
          decorators={decorators}
          wrapAround={true}
        >
          {slideBlocks}
        </Carousel>
        <style jsx>{`
          .theslider {
            height: 390px;
          }
        `}</style>
      </div>
    );
  }
}
