import ApplyButton from 'components/ApplyButton';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';

export default ({ cta_text, text, home, partner }) => {
  const label = cta_text ? cta_text : 'Ready to become a member?';
  const partnerName = (partner && partner.name) || null;
  const path = new ApplyButtonPathHelper({partnerReferral: partnerName}).fullPath
  return (
    <div className='inner'>
      <div className='apply'>
        <div className='input-group show apply' id='email'>
          <label>{label}</label>
        </div>
        <div className='input-group show'>
          <ApplyButton
            text={text || null}
            opts={
              {
                id: 'start-apply',
                path: path
              }
            }
          />
        </div>
      </div>
    </div>
  )
}
