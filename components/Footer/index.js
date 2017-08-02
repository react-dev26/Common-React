import Link from 'next/link';
import SocialIcon from 'components/SocialIcon';
import Photo from 'components/Photo';

export default () => (
  <div>
    <footer id='footer'>
      <section className='section footer-columns text-left'>
        <div className='footer-column footer-column--left wp100-mobile-tablet pb18'>
          <a href='/' className='logo'>
            <Photo photo={
              {
                oneXPhoto: {
                  url: '/static/images/common-logo.svg'
                },
                altText: 'Common logo'
              }
            }
            />
          </a>
        <div className='footer-column-text'>
          <p className='ls0 mt0-mobile-tablet'> 6 E 43rd St., 18th Fl.<br/> New York, NY<br/> 10017 </p>
          <p className='ls0'>
            <Link href='tel:+18003037834'>
              <a id='phone-number-link' className='gray-link'>
                (800) 303-7834
              </a>
            </Link>
          </p>
        </div>
        <ul className='footer-socials list-reset pt18-mobile-tablet'>
          <li className='footer-socials-social'>
            <Link href='https://www.facebook.com/hellocommon'>
              <a target='_blank' rel='noopener noreferrer'>
                <SocialIcon alt='Facebook'
                  src='/static/images/footer/s-fb.svg'
                  srcOnHover='/static/images/footer/s-fb-a.svg'
                />
              </a>
            </Link>
          </li>
          <li className='footer-socials-social'>
            <Link href='https://twitter.com/hicommon/'>
              <a target='_blank' rel='noopener noreferrer'>
                <SocialIcon alt='Twitter'
                  src='/static/images/footer/s-tw.svg'
                  srcOnHover='/static/images/footer/s-tw-a.svg'
                />
              </a>
            </Link>
          </li>
          <li className='footer-socials-social'>
            <Link href='https://instagram.com/hi.common/'>
              <a target='_blank' rel='noopener noreferrer'>
                <SocialIcon alt='Instagram'
                  src='/static/images/footer/s-ig.svg'
                  srcOnHover='/static/images/footer/s-ig-a.svg'
                />
              </a>
            </Link>
          </li>
        </ul>
        </div>
        <div className='footer-column footer-column--right wp100-mobile-tablet pb18'>
          <div className='footer-column-subcolumn pb18 ml0-mobile-tablet'>
            <ul className='footer-column-list list-reset'>
              <li className='footer-column-list-item footer-column-list-item--primary'>
                <h4>Discover</h4>
              </li>
              <li className='footer-column-list-item'>
                <a href='/membership' className='gray-link text-left'>
                  Why Common
                </a>
              </li>
            </ul>
          </div>
          <div className='footer-column-subcolumn pb18 mr0-mobile-tablet'>
            <ul className='footer-column-list list-reset'>
              <li className='footer-column-list-item footer-column-list-item--primary'>
                <h4>Company</h4>
              </li>
              <li className='footer-column-list-item'>
                <a href='/about' className='gray-link text-left'>
                  About
                </a>
              </li>
              <li className='footer-column-list-item'>
                <a href='/real-estate-partners' className='gray-link text-left'>
                  Real Estate Partners
                </a>
              </li>
              <li className='footer-column-list-item'>
                <a href='https://www.common.com/blog' rel='noopener noreferrer' target='_blank' className='gray-link text-left'>
                  Blog
                </a>
              </li>
              <li className='footer-column-list-item'>
                <Link href='mailto:hi@common.com'>
                  <a className='gray-link text-left'>
                    Contact Us
                  </a>
                </Link>
              </li>
              <li className='footer-column-list-item'>
                <Link href='https://jobs.lever.co/common'>
                  <a rel='noopener noreferrer' target='_blank' className='gray-link text-left'>
                    Careers
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  </div>
)
