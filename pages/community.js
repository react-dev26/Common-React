import PageHead     from 'components/PageHead'
import PageBody     from 'components/PageBody'
import People       from 'components/People'
import IntroSection from 'components/IntroSection'
import ApplyButton  from 'components/ApplyButton'
import ApplySection from 'components/ApplySection'
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';

const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='Community | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <div id='site-main' className='community'>
        <div className='inner'>
        <IntroSection
          title='Community'
          subTitleStyle='max32'
          subTitle="We’re a community of passionate and creative people who live, work, and play together."
          backgroundUrl='/static/images/community/bcg-hero.jpg'
        />
        <section className="section section-values" id="values">
          <div className="inner">
            <h2>Values</h2>
            <ul>
              <li>
                <h3>Be Present</h3>
                <p>Get to know those around you. Have an opinion. Dive in and take part in all the community has to offer.</p>
              </li>
              <li>
                <h3>Open the Door</h3>
                <p>Welcome others and invite them to join in. Relish in the opportunity to connect with interesting people.</p>
              </li>
              <li>
                <h3>Keep Evolving</h3>
                <p>No one is perfect. Learn from one another and strive to become greater at everything you do, together.</p>
              </li>
              <li>
                <h3>Lend a Hand</h3>
                <p>Help out. Leave places better than you found them. Share your unique talents with those around you.</p>
              </li>
              <li>
                <h3>Stay Curious</h3>
                <p>Ask questions and seek answers. Tackle new challenges and make new discoveries. Never stop exploring.</p>
              </li>
              <li>
                <h3>Love the Journey</h3>
                <p>Life is about the journey, not the destination. Embrace the adventure and have fun.</p>
              </li>
            </ul>
            <ApplyButton opts={{ path: new ApplyButtonPathHelper().fullPath }} />
          </div>
        </section>
        <section className="section section-opinionscommunity full-width">
          <div className="bg-hero">
            <div className="inner">
              <h2>
                Be part of a collaborative and welcoming culture that fosters a strong sense of community.
              </h2>
            </div>
          </div>
        </section>
        <People />
        <section className="section section-apply full-width">
          <ApplySection />
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
