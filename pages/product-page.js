import Head from 'next/head';

import PageHead from 'components/PageHead';
import PageBody from 'components/PageBody';
import HomePageSlider from 'components/HomePageSlider';
import FullBleedPhotoWithHeaders from 'components/FullBleedPhotoWithHeaders';
import LeaseableUnitOverviewSection from 'components/LeaseableUnitOverviewSection';
import MatterportSection from 'components/MatterportSection';
import CommunitySection from 'components/CommunitySection';
import AmenitiesSection from 'components/AmenitiesSection';
import NeighborhoodSection from 'components/NeighborhoodSection';
import LeaseableUnit from 'components/LeaseableUnit';
import EmbeddedApplyForm from 'components/EmbeddedApplyForm';
import GoogleMapsSection from 'components/GoogleMapsSection';
import stylesheet from 'styles/index.scss';
const Page = ({ data, home, urlSlug }) => {
  const hasMatterportTours =
    !!(home.productPageSections.filter(section => {
      return section.sectionType.type === 'matterport';
    }).length);
  return (
    <div>
      <PageHead
        pageTitle={home.metadata.title}
        pageDescription={home.metadata.description}
        pageImage={home.metadata.image.url}
        pageSlug={urlSlug}
        hasMatterportTours={hasMatterportTours}
      />
      <PageBody cities={data.cities} home={home} isProductPage={true} >
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <main id="site-main" className="home product-page">
          <section className="nav-anchor no-max-width">
            <div className="fl w-70-l w-100">
              <HomePageSlider slides={home.sliderContent} />
            </div>
            <div className="fl w-30-l w-100">
              <EmbeddedApplyForm
                homeName={home.name}
                homeDescription={home.overviewDescription}
                cityName={home.neighborhood.city.name}
              />
            </div>
          </section>
          <section className="home-content">
            <FullBleedPhotoWithHeaders
              headerPhoto={home.welcomeSection.fullBleedPhoto}
              header={home.welcomeSection.header}
              subheader={home.welcomeSection.subheader}
              shouldLazyloadPhotos={true}
              classesForPhotos="object-fit"
            />
            <LeaseableUnitOverviewSection
              leaseableUnitTypes={home.leaseableUnitTypes}
            />
            <section className="nav-anchor" id="overview" style={{padding: '10px 0 0'}}>
              {home.productPageSections.map((section, i) => {
                switch (section.sectionType.type) {
                  case 'matterport':
                    return (
                      <div key={i}>
                        <MatterportSection
                          header={`Experience Common ${home.name}`}
                          tours={section.tours}
                        />
                      </div>
                    );
                  case 'community':
                    return (
                      <CommunitySection
                        key={i}
                        fullBleedPhoto={section.fullBleedPhoto}
                        header={section.header}
                        subheader={section.subheader}
                        description={section.description}
                        photoGrid={section.photoGrid}
                      />
                    );
                  case 'amenities':
                    return (
                      <AmenitiesSection
                        key={i}
                        homeName={home.name}
                        mainPhoto={section.mainPhoto}
                        header={section.header}
                        subheader={section.subheader}
                        bigAmenities={section.bigAmenities}
                        smallAmenities={section.smallAmenities}
                        photos={section.photos}
                      />
                    );
                  case 'neighborhood':
                    return (
                      <div key={i}>
                        <NeighborhoodSection
                          fullBleedPhoto={section.fullBleedPhoto}
                          header={section.header}
                          subheader={section.subheader}
                          showcaseRows={section.neighborhoodShowcaseRows}
                        />
                        {section.mapSection &&
                          <GoogleMapsSection
                            lat={section.mapSection.locationToBeDisplayed.lat}
                            lng={section.mapSection.locationToBeDisplayed.lon}
                            zoom={15}
                            radius={321.869}
                          />}
                      </div>
                    );
                }
              })}
              {home.leaseableUnitTypes.map((unitData, i) => {
                return (
                  <LeaseableUnit
                    leaseableUnit={unitData}
                    home={home}
                    index={i}
                    key={`leaseable-unit-${i}`}
                  />
                );
              })}
            </section>
          </section>
        </main>
      </PageBody>
      <style jsx>
      {`
        @media screen and (max-width: 64em) {
          .w-70-l {
              width: 100%;
          }
        }
        @media screen and (max-width: 64em) {
          .w-30-l {
              width: 100%;
          }
        }
      `}
      </style>
    </div>
  );
};

Page.getInitialProps = async ({ query, req }) => {
  return {
    home: query.home,
    data: query.data,
    urlSlug: req.originalUrl
  };
};

export default Page;
