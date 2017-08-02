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
          className="previous" 
          onClick={this.props.onClick}
        >
          <span className='previous'></span>
          Previous
        </button>
        <style jsx>{`
          span.previous {
            display: block;
            left: -60px;
            height: 40px;
            width: 20px;
            background-image: url('/static/images/sliders/slider-prev.svg');
            background-size: 20px 40px;
          }
          button.previous{
            font-size: 0;
            left: -45px;
            line-height: 0;
            position: absolute;
            top: 50%;
            display: block;
            width: 20px;
            height: 20px;
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
