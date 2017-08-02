import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <button 
          type="button" 
          className="nextSlide" 
          onClick={this.props.onClick}
        >
          <span className='nextSlide'></span>
          Next
        </button>
        <style jsx>{`    
          span.nextSlide {
            display:block;
            right: -60px;
            height: 40px;
            width: 20px;
            background-image: url('/static/images/sliders/slider-next.svg');
            background-size: 20px 40px;
          }
          button.nextSlide{
            right:-45px;
            font-size: 0;
            line-height: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 20px;
            height: 40px;
            margin-top: -10px;
            padding: 0;
            cursor: pointer;
            color: transparent;
            border: none;
            outline: none;
            background: transparent;
          }
        `}</style>
      </div>
    );
  }
}
