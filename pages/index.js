import PageHead           from 'components/PageHead'
import PageBody           from 'components/PageBody'
import People             from 'components/People'
import Press              from 'components/Press'
import ApplySection       from 'components/ApplySection'
import IntroSection       from 'components/IntroSection'
import MembershipFeatures from 'components/MembershipFeatures'
import HomesSection       from 'components/HomesSection'
import { Component }      from 'react'

const amenities=[
  {
    classes: 'bedroom',
    header: 'Private Bedroom',
    content: 'A space to call your own. Choose a room designed for singles or couples.'
  },
  {
    classes: 'stay-terms',
    header: 'Flexible Moves',
    content: "Adventure awaits. Move to any other Common home with just 24 hours' notice."
  },
  {
    classes: 'make-yourself-home',
    header: 'Fully Furnished',
    content: 'Just bring you. We’ve got the mattress, bedding, hangers, couches, spoons and everything in between.'
  },
  {
    classes: 'utilities',
    header: 'Utilities Covered',
    content: 'We’ll take the bill. Electricity, water and all that other good stuff is always included&mdash;no math. No surprises.'
  },
  {
    classes: 'cooking',
    header: 'Superfast WiFi',
    content: 'Commercial&#45;grade WiFi powers private and communal spaces. Because Netflix and cat videos.'
  },
  {
    classes: 'clean-house',
    header: 'Weekly Cleaning',
    content: 'We’re all about good, clean fun. Shared spaces are spruced weekly to keep the place feeling (and smelling) like home.'
  },
  {
    classes: 'stocked',
    header: 'Shared Supplies',
    content: 'We’ve thought of literally everything so you can think about other stuff. Kitchen, bathroom, cooking and cleaning supplies are baked right in.'
  },
  {
    classes: 'heartbeat',
    header: 'Community Events',
    content: 'It’s better together. We plan weekly and monthly gatherings like potluck dinners, movie nights, yoga, book clubs and all the fun things.'
  },
  {
    classes: 'laundry',
    header: '24/7 Laundry',
    content: 'Make a clean break from offsite laundry. Wash and dry anytime in the comfort of your own home&mdash;we’ll bring the detergent.'
  }
];

class Page extends Component {
  render() {
    const { data, pageType, partner, urlSlug} = this.props;
    return (
      <div>
        <PageHead
          pageTitle='Coliving at Common | Flexible, Friendly Shared Housing'
          pageSlug={urlSlug}
        />
        <PageBody cities={data.cities} partner={partner}>
          <div id='site-main' className='inner'>
            <IntroSection
              title='Home. Made.'
              subTitle='Shared housing for those who live life in common.'
              backgroundUrl='/static/images/landing-page/bcg-hero@2x.jpg'
              partner={partner}
              pageType={pageType}
            />
            <HomesSection cities={data.cities} />
            <section className='section pv4-ns pa3 section-features'>
              <div className='cf w-100 features'>
                <div className='fl w-50-ns pr2-ns w-100 tc'>
                  <img src='/static/images/landing-page/convenience.jpg' alt='Convenience' className='img-responsive'/>
                  <h3 className='feature-header'>Convenience</h3>
                  <p>Where the feeling of home is made for you, and so is just about everything else.</p>
                </div>
                <div className='fl w-50-ns pl2-ns w-100 tc'>
                  <img src='/static/images/landing-page/community.jpg' alt='Community' className='img-responsive'/>
                  <h3 className='feature-header'>Community</h3>
                  <p>Co-living, co-eating, co-playing, co-creating. This is what it means to live life in common.</p>
                </div>
              </div>
            </section>
            <section className='section section-membership-features inner'>
              <MembershipFeatures showHeader={true}
                header='The Common Experience'
                subheader='Available to all Common members.'
                amenities={amenities}
              />
            </section>
            <People />
            <Press />
            <section className='section section-apply full-width'>
              <ApplySection partner={partner} />
            </section>
          </div>
        </PageBody>
        <style jsx>{`
          .feature-header {
            margin: 30px 0 25px 0;
            font-size: 2.25em;
            line-height: 36px;
            font-family: 'Titillium Web', sans-serif;
            font-weight: 600;
          }
          section.section-features {
            background: #FFFFFF;
            color: #000000;
          }
          section {
            margin: 0 auto;
            max-width: 1200px;
          }
          .inner section.section-features {
            background: #FFFFFF;
            color: #000000;
          }
          .section-membership-features {
             background: #FFFFFF;
             color: #3d3f41;
             padding-top: 60px;
          }
          section.section.section-membership-features>div.inner h3 {
            margin-bottom: 60px;
            font-weight: 300;
            color: #3d3f41;
            font-family: 'Lato', sans-serif;
          }
          section.section.section-membership-features>div.inner h2 {
            font-weight: 300;
            font-size: 2em;
            margin-bottom: 0;
            letter-spacing: 1.3px;
          }
          .pa3 {
            padding: 0px 40px;
          }
          @media screen and (min-width: 30em) {
            .w-50-ns {
                width: 100%;
            }
          }
          @media screen and (min-width: 48em) {
            .w-50-ns {
                width: 50%;
            }
          }
          @media screen and (max-width: 47.937em) {
            .pa3 {
              padding: 0px 10px;
            }
          }
          @media screen and (min-width: 30em) {
            .pr2-ns {
              padding-right: 0px;
            }
            .pl2-ns {
              padding-left: 0px;
            }
          }
          @media screen and (min-width: 48em) {
            .pr2-ns {
              padding-right: .5rem;
            }
            .pl2-ns {
              padding-left: .5rem;
            }
          }
        `}</style>
      </div>
    )
  }
}

Page.getInitialProps = async ({ query, req }) => {
  return {
    data: query.data,
    pageType: query.pageType || 'index',
    partner: query.partner,
    urlSlug: req.originalUrl
  }
}

export default Page
