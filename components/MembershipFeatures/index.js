import Amenity from 'components/Amenity'

export default ({ header, subheader, showHeader, amenities, classes}) => {
  let position;
  if (classes == 'two-x-two') {
    position = 'w-50-ns';
  } else {
    position = 'w-third-ns';
  }

  let mappedAmenities = amenities.map((amenity, index) => (
    <li className={position +' fl w-100 ph0 mb4'} key={index} >
      <Amenity amenity={amenity} />
    </li>
  ))

  return (
    <div className={`${classes ? classes : ''} inner1`}>
      {showHeader && <h2>{header}</h2>}
      {showHeader && <h3>{subheader}</h3>}
      <ul className='flex justify-center flex-wrap membership cf w-100'>
        {mappedAmenities}
      </ul>
      <style jsx>{`
        div.inner1 {
          padding-left:0.7rem;
          padding-right:0.7rem;
        }
        @media screen and (min-width: 64.0625em){
          .inner1 {
            display:-webkit-box;
            display:-moz-box;
            display:box;
            display:-moz-flex;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-orient:vertical;
            box-orient:vertical;
            -webkit-box-direction:normal;
            box-direction:normal;
            -moz-flex-direction:column;
            flex-direction:column;
            -ms-flex-direction:column
          }
        }
        @media screen and (min-width: 48em) {
          div.inner1 {
            padding-left:2.5rem;
            padding-right:2.5rem;
          }
          div.inner1 ul{
            display:-webkit-box;
            display:-moz-box;
            display:box;
            display:-moz-flex;
            display:-ms-flexbox;
            display:flex;
            -webkit-box-orient:horizontal;
            box-orient:horizontal;
            -webkit-box-direction:normal;
            box-direction:normal;
            -moz-flex-direction:row;
            flex-direction:row;
            -ms-flex-direction:row;
            -webkit-box-lines:multiple;
            -moz-box-lines:multiple;
            box-lines:multiple;
            -ms-flex-wrap:wrap;
            flex-wrap:wrap;
            -webkit-box-pack:center;
            box-pack:center;
            -moz-justify-content:center;
            -ms-justify-content:center;
            -o-justify-content:center;
            justify-content:center;
            -ms-flex-pack:center;
          }
        }
        div.inner1 ul li {
          text-align:left;
          position:relative
        }
        .cf:after, .cf:before{
          display: flex;
        }
        @media screen and (min-width: 48em) {
          div.inner1 ul li {
            -webkit-box-flex:1;
            box-flex:1;
            -moz-flex:1;
            -ms-flex:1;
            flex:1;
            flex-basis:calc(100%/3);
            -ms-flex-preferred-size:calc(100%/3);
            max-width:calc(100%/3);
            margin-bottom:50px
          }
        }
        @media screen and (max-width: 47.9375em) {
          div.inner1 ul li {
            margin-bottom:20px
          }
        }
        h2 {
          font-weight: 300;
          font-size: 2em;
          margin-bottom: 0;
          letter-spacing: 1.3px;
        }
        h3 {
          margin-bottom: 60px;
          font-weight: 300;
          color: #3d3f41;
          font-family: 'Lato', sans-serif;
        }
        li {
          display: list-item;
        }
        ul.membership{
          list-style: none;
          margin: 0;
          padding: 0;
          text-align: left;
          position: relative;
        }
        @media (max-width: 47.9375em)
          ul li span {
            position: absolute;
            width: 95px;
            top: 0;
            bottom: 0;
            left: 0;
            background-position: center top;
            background-repeat: no-repeat;
          }
        }
      `}</style>
    </div>
  )
}
