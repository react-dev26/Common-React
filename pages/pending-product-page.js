import Head from 'next/head'
import PageHead from 'components/PageHead'
import PageBody from 'components/PageBody'
import WaitlistSignup from 'components/WaitlistSignup'
import viewport from 'lib/viewportVariables'

const Page = ({ data, home, urlSlug }) => {
  const photo = home.photoUsedOnProductPage;
  const oneXPhoto = photo.oneXPhoto.url;
  const twoXPhoto = photo.twoXPhoto && photo.twoXPhoto.url;
  const backgroundPhoto = twoXPhoto ?  twoXPhoto : oneXPhoto;

  return (
    <div>
      <PageHead
        pageTitle={home.metadata.title}
        pageDescription={home.metadata.description}
        pageImage={home.metadata.image.url}
        pageSlug={urlSlug}
      />
      <PageBody cities={data.cities} home={home}>
        <main id='site-main' className='pending-product-page'>
          <section className='container flex flex-column justify-center relative bg-center cover mw-100' style={{
            backgroundImage: `url('${backgroundPhoto}')`
          }}>
            <h1 className="lh-solid">{home.name}</h1>
            <h3 className="fw3" dangerouslySetInnerHTML={{__html: home.description}}></h3>
            <WaitlistSignup home={home}/>
            <style jsx>{`
              h1 {
                font-size: 3.875em;
                margin-bottom: 36px;
              }
              h3 {
                font-size: 1.125em;
                font-family: 'Lato', sans-serif;
                font-weight: 400;
              }
              .container {
                height: calc(100vh - 70px);
                min-height: 600px;
                padding: 0 35px;
              }
              @media (max-width: ${viewport.tablet}px) {
                .container {
                  padding: 0 20px;
                }
              }
            `}</style>
          </section>
        </main>
      </PageBody>
    </div>
  )
}

Page.getInitialProps = async ({ query, req }) => {
  return {
    home: query.home,
    data: query.data,
    urlSlug: req.originalUrl
  }
}

export default Page
