import PageHead from 'components/PageHead'
import PageBody from 'components/PageBody'

const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='Page Not Found | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <div id='site-main'>
        <div id='overlay'></div>
        <div className='inner'>
          <section className='section not-found'>
            <div className='inner'>
              <div>
                <label className='not-found-label'>
                  404
                </label>
                <label className='not-found-message'>
                  We couldn&#39;t find what you were looking for. Please check your URL
                  or <a href='/' style={{textDecoration: 'none', color: '#2763B2;'}}>return home</a>.
                </label>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageBody>
  </div>
)

Page.getInitialProps = async ({ query, req }) => {
  return {
    data: query.data,
    urlSlug: req.originalUrl
  }
}

export default Page
