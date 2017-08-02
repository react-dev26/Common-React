import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import { StaggeredMotion, spring } from 'react-motion'
import { RadioButton } from 'material-ui/RadioButton'
import MenuItem from 'material-ui/MenuItem'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import stylesheet from 'styles/animations.scss'

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

let ReferredByForm = (props) => {
  const { isOther, handleSubmit, nextPage, updateApplication } = props
    return (
        <div className="learn-box-success">
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
          <svg className="animated-checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"><circle className="animated-checkmark-circle" cx="26" cy="26" r="25" fill="none"/><path className="animated-checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/></svg>
          <h2 className="text-left mt0 mb0">Thank you for your interest!</h2>
          <p className="text-center mt6">Someone from our team will be in touch. <br/> Would you mind telling us how you found out about Common?</p>
          <form onSubmit={handleSubmit}>
            <div>
              <Field
                name="referred_by"
                component={SelectField}
                hintText="Referred by"
                underlineFocusStyle={{ borderColor: '#d34d35' }}
                style={{ width: "280px" }}
                autoFocus
                onChange={updateApplication}
                errorStyle={{ position: 'absolute', right: "0px", bottom: "18px" }}
              >
                <MenuItem value="Google" primaryText="Google" />
                <MenuItem value="Facebook" primaryText="Facebook" />
                <MenuItem value="Streeteasy" primaryText="StreetEasy" />
                <MenuItem value="Press" primaryText="Press" />
                <MenuItem value="other" primaryText="Other" />
              </Field>
            </div>
            <div className="text-left common-field">
              {isOther === 'other' && <Field
                name="other_source"
                component={TextField}
                hintText="Other source"
                floatingLabelText="Other source"
                floatingLabelFixed={true}
                autoFocus
                onBlur={updateApplication}
                underlineFocusStyle={{ borderColor: '#d34d35' }}
                style={{ width: "280px" }}
              />}
            </div>
            <button style={{ width: "280px" }}type="submit" className="btn btn-red btn-xl learn-cta mt18">FINISH</button>
          </form>
        </div>
    )
}

const selector = formValueSelector('apply')
ReferredByForm = connect(
  state => {
    const isOther = selector(state, 'referred_by')
    return {
      isOther
    }
  }
)(ReferredByForm)


export default reduxForm({
  form: 'apply',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(ReferredByForm)
