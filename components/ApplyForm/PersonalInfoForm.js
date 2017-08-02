import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { Motion, StaggeredMotion, spring } from 'react-motion'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import moment from 'moment'

// validation functions
const required = value => (value == null ? 'Required' : undefined)

const email = value =>
  (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email'
    : undefined)

import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

let PersonalInfoForm = (props) => {
  const { handleSubmit, previousPage, nextPage, updateApplication, selectedCity, currentHome, defaultBackgroundImage } = props
  let homeStyles
  if (currentHome) {
    homeStyles = {
      backgroundImage: `url('https:${currentHome.photoUsedOnCityPage.twoXPhoto.url}')`
    }
  } else {
    homeStyles = { backgroundImage: defaultBackgroundImage }
  }
  const autofillFix = { height: '50px', paddingTop: '20px' }
  return (
    <div className="learn-box-inner">
      <div className="learn-box-left faded mobile-tablet-hidden" style={homeStyles}>
        <div className="learn-box-left-overlay">
          <a href="/" className="logo header-link">
            <img src="/static/images/common-logo-white.svg" />
            <style jsx>{`
              img {
                padding: 28px;
              }
            `}</style>
          </a>
          {currentHome && <p className="learn-box-left-home-name mb0">Common {currentHome.name}</p>}
        </div>
      </div>
      <div className="learn-box-right faded">
        <h2 className="text-left mt0 mb1">Let&#39;s talk</h2>
        <p className="text-left mt1 mb1">Tell us a bit about yourself and we will be in touch.</p>
        <section>
        <form className="learn-form" onSubmit={handleSubmit}>
          <div className="text-left common-field">
            <Field
              name="name"
              component={TextField}
              inputStyle={autofillFix}
              hintText="Full Name"
              floatingLabelText="Name"
              validate={required}
              floatingLabelFixed={true}
              style={{ width: "100%" }}
              withRef
              autoFocus
              onBlur={updateApplication}
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
            />
          </div>
          <div className="text-left common-field">
            <Field
              name="email"
              component={TextField}
              inputStyle={autofillFix}
              hintText="Email"
              floatingLabelText="Email"
              floatingLabelFixed={true}
              validate={[required, email]}
              onBlur={updateApplication}
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              style={{ width: "100%" }}
              errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
            />
          </div>
          <div className="text-left common-field">
            <Field
              name="phone"
              component={TextField}
              hintText="(555)-555-5555"
              floatingLabelText="Phone number"
              inputStyle={autofillFix}
              validate={[required]}
              floatingLabelFixed={true}
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              onBlur={updateApplication}
              style={{ width: "100%" }}
              errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
            />
          </div>
          <div className="text-left common-field">
            <Field
              name="month"
              component={SelectField}
              hintText="Month"
              validate={required}
              floatingLabelText="Preferred move-in date"
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              style={{ width: "60%" }}
              onChange={updateApplication}
              maxHeight={200}
            >
              <MenuItem value="January 1" primaryText="January" />
              <MenuItem value="February 1" primaryText="February" />
              <MenuItem value="March 1" primaryText="March" />
              <MenuItem value="April 1" primaryText="April" />
              <MenuItem value="May 1" primaryText="May" />
              <MenuItem value="June 1" primaryText="June" />
              <MenuItem value="July 1" primaryText="July" />
              <MenuItem value="August 1" primaryText="August" />
              <MenuItem value="September 1" primaryText="September" />
              <MenuItem value="October 1" primaryText="October" />
              <MenuItem value="November 1" primaryText="November" />
              <MenuItem value="December 1" primaryText="December" />
            </Field>
            <Field
              name="year"
              component={SelectField}
              hintText="Year"
              validate={required}
              floatingLabelText=" "
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              onChange={updateApplication}
              style={{ width: "calc( 40% - 18px )", marginLeft: "18px" }}
            >
              <MenuItem value={moment().format('Y')} primaryText={moment().format('Y')} />
              <MenuItem value={moment().add(1, 'year').format('Y')} primaryText={moment().add(1, 'year').format('Y')} />
              <MenuItem value={moment().add(2, 'year').format('Y')} primaryText={moment().add(2, 'year').format('Y')} />
            </Field>
          </div>
          <div className="text-left common-field">
            <Field
              name="budget"
              component={SelectField}
              hintText="Please select your budget"
              floatingLabelText="Your budget"
              validate={required}
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              style={{ width: "100%" }}
              floatingLabelFixed={true}
              onChange={updateApplication}
              errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
            >
              <MenuItem value="Over $3,000" primaryText="Over $3,000" />
              <MenuItem value="$2,500 to $3,000" primaryText="$2,500 to $3,000" />
              <MenuItem value="$2,000 to $2,500" primaryText="$2,000 to $2,500" />
              <MenuItem value="$1,500 to $2,000" primaryText="$1,500 to $2,000" />
              <MenuItem value="$1,000 to $1,500" primaryText="$1,000 to $1,500" />
              <MenuItem value="Less than $1,000" primaryText="Less than $1,000" />
            </Field>
          </div>
          <div className="text-left common-field">
            <Field
              name="duration"
              component={SelectField}
              hintText="Please select your preferred duration"
              floatingLabelText="Preferred duration"
              validate={required}
              underlineFocusStyle={{ borderColor: '#d34d35' }}
              style={{ width: "100%" }}
              floatingLabelFixed={true}
              onChange={updateApplication}
              errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
            >
              {selectedCity !== 'Washington, DC' && <MenuItem value="3 Months" primaryText="3 Months" />}
              <MenuItem value="6 Months" primaryText="6 Months" />
              <MenuItem value="12 Months" primaryText="12 Months" />
            </Field>
          </div>
          <div>
          <button type="submit" className="btn btn-red btn-xl learn-cta rollup" >Submit</button>
          </div>
        </form>
        </section>
      </div>
    </div>
  )
}

const selector = formValueSelector('apply')
PersonalInfoForm = connect(
  state => {
    const selectedCity = selector(state, 'city')
    return {
      selectedCity
    }
  }
)(PersonalInfoForm)

export default reduxForm({
  form: 'apply',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(PersonalInfoForm)
