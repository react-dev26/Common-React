import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import CitySelect from './CitySelect'

let CitySelectForm = (props) => {
  const { handleSubmit, nextPage, cities } = props
    return (
      <div className="learn-box-city-select">
        <Field name="city" onChange={nextPage} cities={cities} component={CitySelect} />
      </div>
    )
}

export default reduxForm({
  form: 'apply',
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
  destroyOnUnmount: false,
})(CitySelectForm)
