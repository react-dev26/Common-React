import Link from 'next/link';
import SocialIcon from 'components/SocialIcon';
import Photo from 'components/Photo';

export default ({ }) => (
  <div id='subfooter'>
    <div className='subfooter-container'>
      <section className='section section-copyright text-left'>
        <p className='ls0 inline-block'>
          &copy; <span id='year'>{new Date().getFullYear()}</span> Common Living. All Rights Reserved.
        </p>
        <ul className='subfooter-list mt0 pl0 mb0 inline-block list-reset'>
          <li className='subfooter-list-item inline-block'>
            <a className='gray-link' href='/privacy-policy'>
              <span>Privacy Policy</span>
            </a>
          </li>
          <li className='subfooter-list-item inline-block'>
            <a className='gray-link' href='/terms-of-service'>
              <span>Terms of Service</span>
            </a>
          </li>
          <li className='subfooter-list-item inline-block'>
            <a className='gray-link' href='/equal-housing-opportunity'>
              <Photo photo={{oneXPhoto: {url: '/static/images/equal-housing-opportunity.svg'} }} />
              <span className='mobile-tablet-hidden'>
                Equal Housing Opportunity
              </span>
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>
)
