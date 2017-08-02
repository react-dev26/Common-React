import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className='slider-arrow home-prev'>
        <img
          onClick={this.props.onClick}
          src='/static/images/sliders/prev-circle.svg'
        />
        <style jsx>{`
          .slider-arrow {
            width: 80px;
            max-width: 100%;
            border:0;
          }
          .slider-arrow img {
            width: 50px;
            float: right;
          }
          .slider-arrow img:hover {
            cursor: pointer;
          }
        `}</style>
      </div>
    );
  }
}
