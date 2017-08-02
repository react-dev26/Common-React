import React     from 'react';
import Router    from 'next/router';
import Header    from 'components/Header';
import Footer    from 'components/Footer';
import Subfooter from 'components/Subfooter';

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      offsetToFadeInNav: 10,
      isFixed: false
    };
  }

  componentDidMount() {
    Router.onRouteChangeStart = (url) => {
      location.href = url;
    }

    this.handleScroll();
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    const windowHeight = window.innerHeight;
    const windowScrollTop = window.pageYOffset;
    if (this.props.isProductPage) {
      if (windowScrollTop > (windowHeight - this.state.offsetToFadeInNav)) {
        this.setState({isFixed: true});
      } else {
        this.setState({isFixed: false});
      }
    }
  }

  render() {
    const containerClass = this.state.isFixed ? 'fixed-header' : '';
    const { fullScreen, cities, home, partner, isProductPage, children } =  this.props
    return (
      <div className={containerClass}>
        { !fullScreen && <Header cities={cities} cityName={this.props.cityName} home={home} partner={partner} isFixed={this.state.isFixed} isProductPage={isProductPage} /> }
        { children }
        {!fullScreen && <Footer />}
        {!fullScreen && <Subfooter />}
        <script src="/static/legacy/bundle.js" />
      </div>
    )
  }
}
