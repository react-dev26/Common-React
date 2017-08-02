import Head from 'next/head'
import PageHead             from 'components/PageHead'
import PageBody             from 'components/PageBody'
import ThreeHomeGrid        from 'components/ThreeHomeGrid'
import TwoHomeGrid          from 'components/TwoHomeGrid'
import OneHomeGrid          from 'components/OneHomeGrid'
import MobileTabletHomeGrid from 'components/MobileTabletHomeGrid'
import styleVariables       from 'lib/styleVariables'
import viewport             from 'lib/viewportVariables';


Array.prototype.slices = function (size) {
  var group = []
    , data  = this
    , n     = size;

  for (var i = 0, j = 0; i < data.length; i++) {
    if (i >= n && i % n === 0)
      j++;
    group[j] = group[j] || [];
    group[j].push(data[i])
  }

  return group
}

const Page = ({ city, data, urlSlug }) => {
  return (
    <div>
      <PageHead
        pageTitle={city.metadata.title}
        pageDescription={city.metadata.description}
        pageImage={city.metadata.image.url}
        pageSlug={urlSlug}
      />
      <PageBody cities={data.cities} cityName={city.name}>
        <section id='site-main' className='city'>
          <section className='city-intro'>
            <h1>{ city.name }</h1>
            <p>{ city.description }</p>
          </section>
          <section className='homes'>
            {city.homes.slices(3).map(function (homesChunk, i) {
              return <div key={i} className={`homes-${homesChunk.length}`}>
                { homesChunk.length % 3 === 0 && <ThreeHomeGrid homes={homesChunk} /> }
                { homesChunk.length % 2 === 0 && <TwoHomeGrid homes={homesChunk} /> }
                { homesChunk.length % 1 === 0
                  && homesChunk.length % 2 !== 0
                  && homesChunk.length % 3 !== 0
                  && <OneHomeGrid home={homesChunk[0]} /> }
              </div>
            })}
            <style jsx global >{`
              #site-main.city .homes .photo-grid.desktop.three-homes {
                height: ${styleVariables.threeHomeGridHeight}px;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes {
                flex-wrap: wrap-reverse;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes .big-home {
                flex-direction: row-reverse;
                padding-left: calc(35px / 2);
                padding-right: 0;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes .big-home .info {
                padding-right: 0;
                padding-left: 17.5px;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes .small-home {
                flex-direction: row-reverse;
                padding-left: 0;
                padding-right: calc(35px / 2);
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes:nth-child(odd) .small-home:nth-child(odd) {
                padding-left: 0;
                padding-right: calc(35px / 2);
                flex-direction: row;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes:nth-child(odd) .small-home:nth-child(odd) .info {
                padding-left: calc(35px / 2);
                padding-right: 0;
              }
              #site-main.city .homes .homes-3:nth-child(even) .photo-grid.desktop.three-homes:nth-child(odd) .small-home:nth-child(even) .info {
                padding-left: 0;
              }
              #site-main.city .homes .photo-grid.desktop .home .info .coming-soon {
                font-weight: 600;
                margin-top: 9px;
                color: ${styleVariables.common_red};
              }
              #site-main.city .homes .photo-grid.mobile-tablet .home .info .amenities {
                width: 70%;
              }
              #site-main.city .homes .photo-grid.mobile-tablet .home .info .coming-soon {
                font-size: 1.6em;
                font-weight: 600;
                margin-top: 9px;
                color: ${styleVariables.common_red};
                width: 30%;
                text-align: right;
                line-height: 140%;
              }
              @media (max-width: ${viewport.mobile}px) {
                #site-main.city .homes .photo-grid.mobile-tablet .home .info .coming-soon {
                  margin-bottom: 10px;
                  margin-top: 5px;
                  width: 100%;
                  text-align: right;
                }
              }
              #site-main.city .homes .photo-grid .home .info p.small.subcaption {
                white-space: inherit;
              }
              #site-main.city .homes .photo-grid.desktop .home .info .price p {
                white-space: inherit;
              }
              #site-main.city .homes .photo-grid.desktop .home.big-home .info .price p .number {
                font-size: 1em;
              }
              @media screen and (max-width: 64em) and (min-width: 48em) {
                #site-main.city .homes .photo-grid.mobile-tablet .home {
                    width: 100%;
                }
              }
              @media screen and (max-width: 64em) and (min-width: 48em) {
                #site-main.city .homes .photo-grid.mobile-tablet .home:nth-child(odd) {
                    padding: 0px;
                }
              }
              @media screen and (max-width: 64em) and (min-width: 48em) {
                #site-main.city .homes .photo-grid.mobile-tablet .home .photo-container .photo {
                    height: 350px;
                    width: 100%;
                }
              }
            `}</style>
            { <MobileTabletHomeGrid homes={city.homes} /> }
          </section>
        </section>
      </PageBody>
    </div>
  )
}

Page.getInitialProps = async ({ query, req }) => {
  return {
    city: query.city,
    data: query.data,
    urlSlug: req.originalUrl
  }
}

export default Page
