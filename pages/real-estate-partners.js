import PageHead     from 'components/PageHead'
import PageBody     from 'components/PageBody'
import Press        from 'components/Press'
import IntroSection from 'components/IntroSection'
import HomesSection from 'components/HomesSection'


const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='Real Estate Partners | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <main id="site-main" className="real-estate-partnership">
        <div className='inner'>
          <IntroSection
            title='Real Estate Partnerships'
            subTitle='Our partners are reviving urban neighborhoods around the country. Together, our ideas, projects, and events are helping build stronger, safer, and more vibrant communities.'
            backgroundUrl='/static/images/real-estate-partnerships/bcg-hero@2x.jpg'
            buttonType='link'
          />
          <section className="section section-workwithus">
            <div className="inner">
              <h2 className='w-100'>Why Work With Us?</h2>
              <ul>
                <li>
                  <div className="callout">
                    <div className="icon">
                      <img src='/static/images/real-estate-partnerships/ico-short-term.svg' alt='The Short Term' />
                    </div>
                    <h2>The Short Term</h2>
                    <ul>
                      <li>Through our community partnerships, we are building a membership organization with
                          unparalleled access to newcomers to major cities.
                      </li>
                      <li>We provide our real estate partners with a reliable rental income stream while
                          taking the challenges of property management, leasing, and tenant relations off
                          their plates.
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <div className="callout">
                    <div className="icon">
                      <img src='/static/images/real-estate-partnerships/ico-long-term.svg' alt='The Long Term' />
                    </div>
                    <h2>The Long Term</h2>
                    <ul>
                      <li>We are making long-term investments in specific neighborhoods and our brand.</li>
                      <li>Our real estate partners share Common&#39;s commitment to generating meaningful returns
                          through a long-term neighborhood and community focused approach.
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section section-cols full-width">
            <div className="inner">
              <ul>
                <li>
                  <div className="callout">
                    <div className="icon">
                      <img src='/static/images/real-estate-partnerships/ico-strong-unit.svg' alt='Strong Unit Economics' />
                    </div>
                    <h2>Strong Unit Economics</h2>
                    <p>
                      We identify properties that can produce substantial current cash-flow while providing
                      financial resilience even in a down-side scenario.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="callout">
                    <div className="icon">
                      <img src='/static/images/real-estate-partnerships/ico-staged-growth.svg' alt='Staged Growth into Demand' />
                    </div>
                    <h2>Staged Growth into Demand</h2>
                    <p>
                      Our flexible business model, which utilizes numerous types of properties, coupled with
                      underlying demographic trends enables us to grow into real demand and avoid taking on
                      more inventory than we can fill. Our model works in existing housing stock and ground up
                      development alike.
                    </p>
                  </div>
                </li>
                <li>
                  <div className="callout">
                    <div className="icon">
                      <img src='/static/images/real-estate-partnerships/ico-underlying-property.svg' alt='Appreciation of Underlying Property' />
                    </div>
                    <h2>Appreciation of Underlying Property</h2>
                    <p>
                      Our long-term, community-driven approach is ideal for partners seeking long-term
                      property appreciation without taking on the headaches of property management.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </section>
          <section className="section section-howwork">
            <div className="inner">
              <h2>How to Work With Us</h2>
              <div className="steps">
                <div className="step step-one">
                  <h3 className="blue">STEP 1
                    <br/>
                    Introduce A Property
                  </h3>
                  <h4>Already an Owner?</h4>
                  <p>
                    Existing property owners can apply to add a property they already own to the Common network.
                  </p>
                  <h4>Or Want to Buy?</h4>
                  <p>
                    We have identified a number of sites that are ideal for the Common model. We will work with
                    a purchaser to facilitate an acquisition.
                  </p>
                </div>
                <div className="step step-two">
                  <h3 className="blue">STEP 2
                    <br/>
                    Agree On A Partnership Model
                  </h3>
                  <h4>Management Agreement?</h4>
                  <p>
                    Common will sign a managment agreement for the entire building. This is great for partners
                    who want a higher cash-on-cash yield and the opportunity to participate in the co-living
                    model.
                  </p>
                  <h4>Or Master Lease?</h4>
                  <p>
                    Common will sign a master lease for the entire building. This is great for partners who want
                    a stable, fixed return on their asset.
                  </p>
                </div>
              </div>
              <a href="mailto:sterling@common.com" className="btn btn-blue btn-lg">Become our partner</a>
            </div>
          </section>
          <HomesSection cities={data.cities} />
          <Press />
          <section className="section section-become-partner full-width">
            <div className="inner">
              <h3>Become our Real Estate Partner</h3>
              <p>For any partner inquiries or to book a tour with Common in your city, get in touch.</p>
              <a href="mailto:sterling@common.com" className="btn btn-wht-trans-lt btn-lg">Contact Us</a>
            </div>
          </section>
        </div>
      </main>
    </PageBody>
    <style jsx>{`
      .section-workwithus {
        background: #FFFFFF;
        color: #2b2c2b;
        font-size: 1.125em
      }
      .section-workwithus>.inner>ul li {
        list-style: none;
        margin: 0;
        padding: 0;
      }
      .callout ul li {
        font-size: 16px;
        line-height: 30px;
        font-family: 'Lato', sans-serif;
        font-weight: 300;
        text-align: left;
      }
      .callout ul {
        list-style-image: url(/static/images/real-estate-partnerships/diamond-bullet.svg);
      }
      @media screen and (min-width: 64.0625em){#site-main.community>.inner section.section.section-memberstories>.inner>ul li .callout{margin-bottom:0}}#site-main.community>.inner section.section.section-memberstories>.inner>ul li .callout .icon img{max-width:110px}@media screen and (min-width: 64.0625em){#site-main.community>.inner section.section.section-memberstories>.inner>ul li .callout .icon img{max-width:100%}}
    `}</style>
  </div>
)

Page.getInitialProps = async ({ query, req }) => {
  return {
    data: query.data,
    urlSlug: req.originalUrl
  }
}

export default Page
