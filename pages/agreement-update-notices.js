import PageHead from 'components/PageHead'
import PageBody from 'components/PageBody'

const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='Membership Agreements | Common'
      pageSlug={urlSlug}
      shouldNotIndex={true}
    />
    <PageBody cities={data.cities}>
      <main id="site-main">
        <div className="inner">
          <section className="section section-privacy">
            <div className="inner">
              <h2>Updates to Membership Agreements</h2>
              <h3>Last updated: 01/03/2017</h3>
              <p>
                <b>Pursuant to the notice provision of the Membership Agreement, please be advised that the following amendments have been made to the end of the Membership Agreement, unless another location is indicated:</b>
              </p>
              <p>
                License/Use of Image: Member consents and authorizes Common to use Member’s likeness in any and all of its publications, including but not limited to Common's printed and digital publications and marketing materials.  Member further understands and agrees that any reproduction of Member’s likeness will become property of Common  for all times in all places in perpetuity.  Member agrees not to receive, nor request, compensation for Common's use of Member’s likeness.  Member also waives the right to inspect or approve the printed and digital publications and marketing materials in which Member’s image may appear.  Common will not associate Member’s name with Member’s likeness without an additional express written consent from Member to do so.
              </p>
              <p>
                Grant of License: To the extent that Member posts, sends or otherwise delivers, any material, products or other works whether printed or digital ("Materials"), to Common, Member grants a license to Common to use the Materials for all times in all places in perpetuity and without compensation to Member.  Member has granted Common a license to use these Materials, but Member retains title and Ownership to the Materials. Common will own all rights to material, products or other works created from the Materials.
              </p>
            </div>
          </section>
        </div>
      </main>
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
