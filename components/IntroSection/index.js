import ApplyButton from 'components/ApplyButton';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';
import Photo from 'components/Photo';

export default ({ backgroundUrl, partner, pageType, title, subTitle, subTitleStyle, buttonType }) => {

  let button;
  if (buttonType === 'link') {
    button=(<a href="mailto:sterling@common.com" className="btn btn-wht-trans-lt btn-lg">Become our partner</a>)
  } else {
    const partnerName = (partner && partner && partner.name) || null;
    const applyButtonPath = new ApplyButtonPathHelper({partnerReferral: partnerName}).fullPath;
    button=(<ApplyButton opts={{ path: applyButtonPath }} />)
  }

  let partnerImage;
  if (partner) {
    partnerImage = <Photo className='partner-image' photo={{oneXPhoto: {url: partner.photo.url} }} alt={partner.name} />;
  }

  return (
    <div className='inner'>
      {
        pageType === 'partner' && !!partner && <div className='partner'>
          <p>In Partnership With</p>
          { partner.partnerUrl ? <a href={partner.partnerUrl} rel="noopener noreferrer" target="_blank">{partnerImage}</a> : partnerImage }
        </div>
      }
      <div className={pageType=='partner' ? 'partner-homepage bg-hero': 'bg-hero'} style={{backgroundImage: `url('${backgroundUrl}')`}}>
        <section className='section section-intro'>
          <div className='inner'>
            <h1>{title}</h1>
            <p className={subTitleStyle}>{subTitle}</p>
          </div>
        </section>
        <section className='section section-btn'>
          <div className='inner'>{button}</div>
        </section>
      </div>
      <style jsx>{`
        .max32 {
          max-width:32rem;
        }
        .bg-hero {
            padding: 140px 0 120px;
        }
        @media (min-width: 64.0625em) {
          .bg-hero {
            padding: 140px 0 120px !important;
          }
        }

        @media only screen and (-webkit-min-device-pixel-ratio: 1.5), not all, only screen and (min-resolution: 144dpi), only screen and (min-resolution: 1.5dppx) {
          .bg-hero {
            background-color: transparent;
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            padding: 0 0 80px;
          }
        }

        .bg-hero {
          background-size: cover;
          background-position-x: center;
          background-position-y: center;
          background-size: cover;
          background-repeat-x: no-repeat;
          background-repeat-y: no-repeat;
          background-attachment: initial;
          background-origin: initial;
          background-clip: initial;
          background-color: transparent;
          position: relative;
        }

        h1 {
          font-size: 2.5em;
          line-height: 1.125em;
          margin: 0 0 30px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  )
}
