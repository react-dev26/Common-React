import PageHead from 'components/PageHead';
import PageBody from 'components/PageBody';
import AboutTeamSection from 'components/AboutTeamSection';
import AboutInvestorsSection from 'components/AboutInvestorsSection';
import Photo from 'components/Photo';

const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='About Us | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <main id='site-main' className='about'>
        <section className='section-about section-about-top-header'>
          <h2>Common is creating better living through convenience and community.</h2>
          <h4 className='headline'>
            We keep the good parts of shared housing while removing the annoyances. Common members know their neighbors, meet new people, and save money. Being a Common member means never having to worry about cleaning, moving furniture, or splitting the bills.
          </h4>
        </section>
        <section className='section-about section-about-community full-width'>
          <div className='about-community-block'>
            <div className='community-image secondary'>
              <div className='community-image small' style={{backgroundImage: "url('/static/images/about/community-6.jpg')"}}></div>
              <div className='community-image small mb0' style={{backgroundImage: "url('/static/images/about/community-2.jpg')"}} ></div>
            </div>
            <div className='community-image main' style={{backgroundImage: "url('/static/images/about/community-7.jpg')"}}></div>
          </div>
        </section>
        <section className='section-about section-about-header'>
          <h2>Perspectives from the Common family</h2>
          <p>Each person on the Common team brings something special to our work together. Get to know a few of us:</p>
        </section>
        <AboutTeamSection />

        <section className='section-about section-about-cta'>
          <h2>Inspired to simplify housing, create beautiful homes, and foster community?</h2>
          <a href='https://jobs.lever.co/common' className= 'btn btn-wht btn-xl' rel='noopener noreferrer' target='_blank'>View open roles</a>
        </section>

        <section className='section-about section-about-stats'>
          <div className='stat'>
            <div className='stat-number'>{data.cities.length}</div>
            <div className='stat-label'>Cities</div>
          </div>
          <div className='stat'>
            <div className='stat-number'>{data.homes.length}</div>
            <div className='stat-label'>Homes</div>
          </div>
          <div className='stat'>
            <div className='stat-number'>400+</div>
            <div className='stat-label'>Members</div>
          </div>
        </section>

        <section className='section-about section-about-header'>
          <h2>Real Estate Partners</h2>
          <p>Real estate developers and investors partner with Common to generate above-market returns through exceptional property management, technology, and coliving services.</p>
        </section>
        <section className='section-about section-about-partners'>
          <div className='about-partner'>
            <Photo className='about-partner-img' photo={{
              oneXPhoto: {
                url: '/static/images/about/partners/paul.jpg'
              },
              altText: 'Paul Henry',
            }} />
            <div className='about-partner-name'>Paul Henry</div>
            <div className='about-partner-secondary'>Founder, Patoma</div>
            <div className='about-partner-separator'></div>
            <div className='about-partner-quote'>"As an owner/developer who has been building and managing multi-bedroom apartments for over 10 years, I have really enjoyed working with Common as they systematize and improve the shared housing model by focusing on member experience and fostering true community in their homes."</div>
          </div>
          <div className='about-partner'>
            <Photo className='about-partner-img' photo={{
              oneXPhoto: {
                url: '/static/images/about/partners/eddie.jpg'
              },
              altText: 'Eddie Soleymani',
            }} />
            <div className='about-partner-name'>Eddie Soleymani</div>
            <div className='about-partner-secondary'>Property Owner</div>
            <div className='about-partner-separator'></div>
            <div className='about-partner-quote'>"Common is making life easier for developers and property owners like myself.  They handle all of the hassles of property management while offering a superior experience to their members.  Common is revolutionizing residential real estate, and their experienced team has made leasing properties easier than ever."</div>
          </div>
        </section>
        <section className='section-about section-about-cta'>
          <h2>Interested in working with us?</h2>
          <a className='btn btn-wht btn-xl' href='mailto:hi@common.com'>Get in touch</a>
        </section>
        <section className='section-about section-about-header'>
          <h2>investors include</h2>
        </section>
        <AboutInvestorsSection />
      </main>
    </PageBody>
    <style jsx>{`
      .mw575 {
        max-width:575px;
      }
      .section-about-team .team-members-block .team-member.main {
        margin-right: 0px !important;
      }
      .section-about-community .about-community-block .community-image.main {
        width: 100%;
      }
      .section-about {
        padding-left: 15px;
        padding-right: 15px;
      }
      .section-about-stats .stat {
        padding: 8px;
      }
      @media screen and (max-width: 36em) {
        .section-about-community .about-community-block .community-image.main {
            height: 250px;
        }
      }
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
