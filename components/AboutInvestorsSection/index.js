import Photo from 'components/Photo';

export default () => {
  const images = ['/static/images/about/logos/8VC.svg', '/static/images/about/logos/maveron-logo.png',
  '/static/images/about/logos/lefrak-logo.png', '/static/images/about/logos/iv-logo.png',
  '/static/images/about/logos/cv-logo.svg', '/static/images/about/logos/solomon-logo.png'];
  const imageComponents = images.map( (url) => {
    return (
      <div className='about-investor'>
        <Photo photo={{oneXPhoto: {url} }} />
      </div>
    )
  });
  return (
    <section className='section-about section-about-investors'>
      {imageComponents}
    </section>
  )
}
