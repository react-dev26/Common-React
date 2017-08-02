import BackgroundImageHelper from 'lib/BackgroundImageHelper';

export default ({home}) => (
  <div className='ma2'>
    <a className="home" href={home.pageLink} >
      <div className="details-container">
        <span className="details w-100">
          <span className="overlay">
          </span>
          <span className="image" style={new BackgroundImageHelper(home.photo).style}>
          </span>
          <div className='textwrapper'>
          <h3>{home.name}</h3>
          <span className="name">{home.neighborhood}</span>
          </div>
        </span>
      </div>
    </a>
    <style jsx>{`
      .ma2 {
        margin: 0px;
      }
      .textwrapper {
        position:absolute;
        top:40%;
        bottom:0;
        right:0;
        left:0;
      }
      .overlay {
        position:absolute;
        top:0;
        bottom:0;
        right:0;
        left:0;
      }
      a.home {
        display:block;
        color:#FFFFFF;
        border:0;
        margin:0;
        float:none;
        height:380px;
        text-decoration:none;
        width:auto;
        overflow:hidden
      }
      a.home:focus{
        outline:none
      }
      a.home .details-container{
        text-align:center;
        display:-webkit-box;
        display:-moz-box;
        display:box;
        display:-moz-flex;
        display:-ms-flexbox;
        display:flex;
        -webkit-box-align:center;
        box-align:center;
        -moz-align-items:center;
        -ms-align-items:center;
        -o-align-items:center;
        align-items:center;
        -ms-flex-align:center;
        -webkit-box-pack:center;
        box-pack:center;
        -moz-justify-content:center;
        -ms-justify-content:center;
        -o-justify-content:center;
        justify-content:center;
        -ms-flex-pack:center
      }
      a.home .details-container:hover span.image {
        -webkit-transform:scale(1.1);
        transform:scale(1.1)
      }
      a.home span.image {
        position:absolute;
        top:0;
        left:0;
        right:0;
        bottom:0
      }
      a.home span.overlay {
        z-index:2;
        background:black;
        opacity:.2
      }
      a.home span.image {
        display:block;
        height:380px;
        z-index:1;
        -webkit-transition:all 0.5s ease-in-out;
        transition:all 0.5s ease-in-out;
        background-color:transparent;
        background-size:cover;
        background-position:center;
        background-repeat:no-repeat
      }
      a.home h3{
        font-family:'Titillium Web', sans-serif;
        font-weight:600;
        position:relative;
        font-size:2.25em;
        line-height:36px;
        line-spacing:1.3px;
        margin-bottom:20px;
        margin-top:0;
        z-index:2;
        text-shadow:1px 1px 2px rgba(0,0,0,0.5)
      }
      a.home h3:after{
        content:" ";
        border-bottom:2px #FFFFFF solid;
        position:absolute;
        left:50%;
        margin-left:-50px;
        width:100px;
        bottom:-15px
      }
      a.home span.name{
        font-family:'Titillium Web', sans-serif;
        font-weight:300;
        z-index:2;
        font-size:1.25em;
        position:relative;
        text-shadow:1px 1px 2px rgba(0,0,0,0.5)
      }
      @media screen and (max-width: 47.9375em){
        a.home{
          min-height:300px
        }
        a.home h3{
          font-size:1.625em
        }
        a.home span{
          font-size:1.125em
        }
      }
      @media screen and (max-width: 22.5em){
        a.home{
          min-height:240px
        }
      }
    `}</style>
  </div>
);
