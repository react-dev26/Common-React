import Photo from 'components/Photo';

export default ({ slide }) => {
  // TODO video!
  return (
    <div className='home-slide' key={slide.id} >
      <Photo photo={slide} className='object-fit' />
    </div>
  )
}
