import Photo from 'components/Photo';

export default ({ }) => {
  const people = [
    {
      name: 'Anu',
      neighborhoodShortened: 'Crown Heights',
      neighborhood: 'Crown Heights, Brooklyn',
      imageUrl: '/static/images/our-members/1-anu.jpg',
      quote: '\“Not knowing anyone in the city meant that Common was the perfect place to start my NY journey and meet new people.\”',
      homeLink: '/pacific',
      homeName: 'Pacific'
    },
    {
      name: 'James',
      neighborhoodShortened: 'Williamsburg',
      neighborhood: 'Williamsburg, Brooklyn',
      imageUrl: '/static/images/our-members/2-james.jpg',
      quote: '\“The ability to move in with only three bags and have everything else provided is why I live here.\”',
      homeLink: '/havemeyer',
      homeName: 'Havemeyer'
    },
    {
      name: 'Kamilah',
      neighborhoodShortened: 'SoMa',
      neighborhood: 'SoMa, San Francisco',
      imageUrl: '/static/images/our-members/3-kamilah.jpg',
      quote: '\“The convenience and community here is game-changing.\”',
      homeLink: '/minna',
      homeName: 'Minna'
    },
    {
      name: 'Cole',
      neighborhoodShortened: 'Crown Heights',
      neighborhood: 'Crown Heights, Brooklyn',
      imageUrl: '/static/images/our-members/4-cole.jpg',
      quote: '\"The daily grind in New York City can be alienating and few things feel as good as knowing I’ll end every day in a welcoming environment.\”',
      homeLink: '/pacific',
      homeName: 'Pacific'
    },
    {
      name: 'Jane',
      neighborhoodShortened: 'Williamsburg',
      neighborhood: 'Williamsburg, Brooklyn',
      imageUrl: '/static/images/our-members/5-jane.jpg',
      quote: '\"Nothing beats walking into a beautiful, clean apartment when I get home from work.\”',
      homeLink: '/havemeyer',
      homeName: 'Havemeyer'
    }
  ]
  const personComponents = people.map( (person) => {
    return (
      <div className='person'>
        <Photo
          photo={{
            oneXPhoto:{
              url: person.imageUrl
            },
            altText: person.name
          }}
        />
        <div className='inner-details-container'>
          <div className='inner-details'>
            <h3>{person.name}</h3>
            <h5>{person.neighborhoodShortened}</h5>
          </div>
          <div className='quote'>
            <h4>{person.quote}</h4>
          </div>
        </div>
        <div className='outer-details-container'>
          <div className='outer-details'>
            <h3>{person.name}</h3>
            <h5>{person.quote}</h5>
            <p><a href={`${person.homeLink}`}>{person.homeName}</a> &bull; {person.neighborhood}</p>
          </div>
        </div>
      </div>
    )
  })
  return (
    <div>
      <section className='section section-people'>
        <div className='inner'>
          <h2>We Live In Common</h2>
        </div>
        <div className='person-container'>
          {personComponents}
        </div>
      </section>
      <style jsx>{`
        h2 {
          margin-top: 0;
          font-family: 'Titillium Web', sans-serif;
          font-weight: 300;
          font-size: 2em;
          color: #4a4c4c;
          margin-bottom: 0;
          letter-spacing: 1.3px;
        }
      `}</style>
    </div>
  )
}
