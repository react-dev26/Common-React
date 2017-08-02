/**
At the time of writing, we are fully aware that `dangerouslySetInnerHTML`
poses a serious security concern. However, at our current scale, we feel that we
are able to trust the members of the team inputting data into Contentful, and are not
worried that they will be inputting malicous code.
**/

import Photo from 'components/Photo';
import styles from './styles';

export default ({header, subheader, headerPhoto, classesForPhotos}) => (
  <section className="full-bleed-photo-with-headers w-100 ">
    <section className="component intro" style={styles.intro}>
      {header && <h1 dangerouslySetInnerHTML={{__html: header}}></h1>}
      {subheader && <h2 dangerouslySetInnerHTML={{__html: subheader}}></h2>}
    </section>
    <section className="grid single-row full-width intro">
      <div>
        {headerPhoto && <Photo className={classesForPhotos} photo={headerPhoto} />}
      </div>
    </section>
  </section>
)
