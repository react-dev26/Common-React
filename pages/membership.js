import Head               from 'next/head'
import PageHead           from 'components/PageHead'
import PageBody           from 'components/PageBody'
import IntroSection       from 'components/IntroSection'
import ApplySection       from 'components/ApplySection'
import MembershipFeatures from 'components/MembershipFeatures'

const everywhereAmenities=[
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
    classes: 'cooking',
    header: 'Superfast WiFi',
    content: 'Commercial&#45;grade WiFi powers private and communal spaces. Because Netflix and cat videos.'
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
const availableAmenities=[
  {
    classes: 'clean-house',
    header: 'Weekly Cleaning',
    content: 'We’re all about good, clean fun. Shared spaces are spruced weekly to keep the place feeling (and smelling) like home.'
  },
  {
    classes: 'utilities',
    header: 'Utilities Covered',
    content: 'We’ll take the bill. Electricity, water and all that other good stuff is always included&mdash;no math. No surprises.'
  },
  {
    classes: 'stocked',
    header: 'Shared Supplies',
    content: 'We’ve thought of literally everything so you can think about other stuff. Kitchen, bathroom, cooking and cleaning supplies are baked right in.'
  },
  {
    classes: 'make-yourself-home',
    header: 'Fully Furnished',
    content: 'Just bring you. We’ve got the mattress, bedding, hangers, couches, spoons and everything in between.'
  }
];

const Page = ({ data, urlSlug }) => (
  <div>
    <PageHead
      pageTitle='Membership | Common'
      pageSlug={urlSlug}
    />
    <PageBody cities={data.cities}>
      <div id='site-main' className='inner membership'>
        <div className='inner'>
          <IntroSection
            title='Membership'
            subTitle='This is where the story begins. Apply and let the adventure unfold.'
            backgroundUrl='/static/images/membership/bcg-hero@2x.jpg'
          />
          <section className='section section-membership-features inner'>
            <MembershipFeatures showHeader={true}
              header='The Common Experience'
              subheader='Included in all Common memberships'
              amenities={everywhereAmenities}
            />
          </section>
          <section className='section section-membership-features inner'>
            <MembershipFeatures showHeader={true}
              classes='two-x-two'
              header='Common Conveniences'
              subheader='Available in most Common homes'
              amenities={availableAmenities}
            />
          </section>
          <section className="section section-apply full-width">
            <ApplySection />
          </section>

        </div>
      </div>
    </PageBody>
    <style jsx>{`
      .feature-header {margin: 30px 0 25px 0;
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
        margin: 30px auto;
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
