import Photo from 'components/Photo';

export default ({}) => (
  <div>
    <section className='section section-press'>
      <div className='inner'>
        <h2>In the News</h2>

        <ul className='quotes'>
          <li>
            <blockquote>
              <p>&ldquo;This Brooklyn co-living space is smarter than NYC’s own plan to fix its housing
                crisis.&rdquo;</p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>&ldquo;Common will transform residential housing by creating a brand that is 'emotionally
                and culturally resonant with millennials' who aren’t served by some aspects of apartment
                living&rdquo;</p>
            </blockquote>
          </li>
          <li>
            <blockquote>
              <p>
                {/* TODO WIRED.com LOGO */}&ldquo;Common is the most advanced of the new breed of
                co-living startups&rdquo;</p>
            </blockquote>
          </li>
        </ul>

        <div className='logos'>
          <ul className='logos-row row-1'>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/us-news.svg'}, altText: 'US News & World Report' }}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/bedford.svg'}, altText: 'Bedford Bowery' }}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/new-yorker.svg'}, altText: 'The New Yorker' }}/>
            </li>
          </ul>

          <ul className='logos-row row-2'>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/tc.svg'}, altText: 'TechCrunch'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/business-insider.svg'}, altText: 'Business Insider'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/c-n-n.svg'}, altText: 'CNN'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/gizmodo-logo.svg'}, altText: 'Gizmodo'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/fast-company.svg'}, altText: 'Fast Company'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/n-y-time.svg'}, altText: 'New York Times'}}/>
            </li>
          </ul>
        </div>
        <div className='logos-mob'>
          <ul className='logos-row'>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/us-news.svg'}, altText: 'US News & World Report'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/bedford.svg'}, altText: 'Bedford Bowery'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/new-yorker.svg'}, altText: 'The New Yorker'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/tc.svg'}, altText: 'TechCrunch'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/business-insider.svg'}, altText: 'Business Insider'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/c-n-n.svg'}, altText: 'CNN'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/gizmodo-logo.svg'}, altText: 'Gizmodo'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/fast-company.svg'}, altText: 'Fast Company'}}/>
            </li>
            <li>
              <Photo photo={{oneXPhoto: {url: '/static/images/publications/n-y-time.svg'}, altText: 'New York Times'}}/>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
)
