import PageHead from 'components/PageHead'
import PageBody from 'components/PageBody'


const Page = ({ data, urlSlug}) => (
  <div>
    <PageHead
      pageTitle='Equal Housing Opportunity | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <div id="site-main">
        <div id="overlay"></div>
          <div className="inner">
            <section className="section" style={{color: "#3D3F41"}}>
              <div className="inner">
                <div>
                  <img className="equal-housing-icon-large" src="/static/images/equal-housing-opportunity-large.svg" />
                  <h2>Equal Housing Opportunity</h2>
                  <p className="equal-housing-message">We are pledged to the letter and spirit of U.S. policy for the achievement of equal housing opportunity throughout the Nation. We encourage and support an affirmative advertising and marketing program in which there are no barriers to obtaining housing because of race, color, religion, sex, handicap, familial status, or national origin. </p>
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
