import Head from 'next/head';
import PageHeadIcons from 'components/PageHeadIcons';
import objectFitPolyfill from 'lib/objectFitPolyfill';
export default ({
  pageTitle,
  pageDescription,
  pageSlug,
  pageImage,
  shouldNotIndex,
  hasMatterportTours
}) => {
  const objectFitPolyfillScript = (
    <script>
      {objectFitPolyfill()}
    </script>)
  const title = pageTitle || 'Coliving at Common | Flexible, Friendly Shared Housing';
  const description = pageDescription || 'Coliving at Common offers shared housing for those who live in common. From studios to private furnished bedrooms, weekly cleaning to community events.';
  const image = pageImage || '/static/images/bcg-hero@2x.jpg';
  const url = pageSlug ? `https://www.common.com${pageSlug}` : 'https://common.com/';
  return (
    <div>
      <Head>
        <meta charSet='utf-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1, user-scalable=no' />

        <title>{title}</title>
        <meta property='og:title' content={title} />
        <meta name='description' content={description} />
        <meta property='og:description' content={description} />
        <meta property='og:url' content={url} />
        <meta property='og:image' content={image} />
        <meta property='og:type' content='website' />

        <meta name='google-site-verification' content='QpDD0JlWLKwwRNS-ZtfthioLFmrzSYOhWUTMYG8bODg' />

        <link href='https://cdnjs.cloudflare.com/ajax/libs/tachyons/4.7.4/tachyons.min.css' rel='stylesheet' />
        <link rel="stylesheet" href="http://unpkg.com/tachyons-flexbox@2.0.5/css/tachyons-flexbox.min.css" />

        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

        <link rel="stylesheet" type="text/css" href='/static/legacy/styles.css' />
        <link rel="stylesheet" type="text/css" href='/static/legacy/learn_more.css' />
        <script src='https://cdnjs.cloudflare.com/ajax/libs/fastclick/1.0.6/fastclick.min.js'></script>

        <script src='/static/legacy/jquery.min.js'></script>

        {hasMatterportTours &&
          <script src="/static/matterport_tour.js" >
          </script>}

        <script src="https://cdn.ravenjs.com/3.17.0/raven.min.js"></script>
        <script src='/static/trackers.min.js'></script>

        <script src='/static/custom_event_shim.js'></script>

        {objectFitPolyfill}

        {shouldNotIndex &&
          <meta name='robots' content='noindex'/>}
      </Head>
      <PageHeadIcons/>
    </div>
  )
}
