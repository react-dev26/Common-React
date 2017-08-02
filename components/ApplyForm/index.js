import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form'
import CitySelectForm from './CitySelectForm'
import PersonalInfoForm from './PersonalInfoForm'
import ReferredByForm from './ReferredByForm'
import queryString from 'query-string'
import docCookies from 'doc-cookies'
import moment from 'moment'
import BackgroundImageHelper from 'lib/BackgroundImageHelper'

class Form extends Component {
  constructor(props) {
    super(props)
    this.nextPage = this.nextPage.bind(this)
    this.getApplication = this.getApplication.bind(this)
    this.updateApplication = this.updateApplication.bind(this)
    this.createApplication = this.createApplication.bind(this)
    this.state = {
      page: 1
    }
  }

  componentWillReceiveProps(props) {
    if (props.initialValues.city && this.state.page < 2) {
      history.replaceState({page: 2}, 'Application form')
      this.setState({ page: 2 })
    }
  }


  componentDidMount() {
    history.replaceState({page: 1}, 'form step 1')

    window.onpopstate = (e) => {
      this.setState({
        page: e.state.page
      })
    }

    const current_uuid = docCookies.getItem('cmn-uuid')

    if (!current_uuid) {
      this.createApplication()
    } else {
      this.getApplication(current_uuid)
    }
  }

  createApplication() {
    this.trackApplyStarted()
    // Update the api with new form values
    window.fetch(`https://app.common.com/applications/`, {
      method: 'POST',
    }).then(data => data.json()).then(data => {
      docCookies.setItem('cmn-uuid', data.uuid, Infinity, '/')
    }).catch(err => {
      console.error('An error occurred during application creation')
    })
  }

  getApplication(uuid) {

    window.fetch(`https://app.common.com/applications/${uuid}`, {
      body: JSON.stringify({
        application: {
          id: uuid,
          uuid: uuid,
          fields: {}
        }
      }),
      method: 'PUT',
      headers: new Headers({"Content-Type": "application/json"})
    }).then(data => data.json()).then(application => {
      this.props.dispatch({type: 'APPLICATION_LOADED', application})
    }).catch(err => {
      console.error('An error syncing the field data.')
    })
  }

  updateApplication() {
    this.props.updateApplication(this.props.formValues)
  }

  nextPage() {
    history.pushState({page: this.state.page+1}, "Application form")
    this.updateApplication()
    this.setState({ page: this.state.page+1 }, () => {
      if (this.state.page === 3) {
        this.trackApplyCompleted()
      }
    })
  }

  trackApplyCompleted() {
    const { formValues: { email } } = this.props
    // Track events
    if (typeof(analytics) !== 'undefined') {
      analytics.alias(email)
      analytics.identify(email)
      analytics.track('Completed Application')
    }
    docCookies.setItem('cmn-email', email, Infinity, '/')
  }

  trackApplyStarted() {
    const { formValues: { email } } = this.props
    // Track events
    if (typeof(analytics) !== 'undefined') {
      analytics.alias(email)
      analytics.identify(email)
      analytics.track('Started Application')
    }
  }

  renderCitySelectForm() {
    return (
      <CitySelectForm
        initialValues={this.props.initialValues}
        nextPage={this.nextPage}
        cities={this.props.data.cities}
        onSubmit={this.props.onSubmit} />
    )
  }

  renderPersonalInfoForm() {
    const defaultBackgroundImage = (new BackgroundImageHelper(this.props.data.homes[0].photoUsedOnCityPage))
    const defaultBackgroundImageUrl = defaultBackgroundImage.style.backgroundImage

    return (
      <PersonalInfoForm
        initialValues={this.props.initialValues}
        nextPage={this.nextPage}
        defaultBackgroundImage={defaultBackgroundImageUrl}
        currentHome={this.props.currentHome}
        updateApplication={this.updateApplication}
        onSubmit={this.nextPage} />
    )
  }

  renderReferredByForm() {
    return (
      <ReferredByForm
        initialValues={this.props.initialValues}
        nextPage={this.nextPage}
        updateApplication={this.updateApplication}
        onSubmit={this.props.onSubmit} />
    )
  }

  render() {
    const { page } = this.state

    return (
      <div className="learn-box">
        { page === 1 && this.renderCitySelectForm() }
        { page === 2 && this.renderPersonalInfoForm() }
        { page === 3 && this.renderReferredByForm() }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  // the import is done here because for some reason the backend doesn't like compiling this lib
  const reduxFormActions = require('redux-form/es/actions')
  const parsedHash = queryString.parse(location.hash) || {}
  let currentHome
  const initialValues = {
    month: moment().add(1, 'month').startOf('month').format('MMMM D'),
    year: moment().add(1, 'month').startOf('month').format('Y'),
    home: parsedHash.h
  }
  // If the home is passed via url, skip the first step
  if (parsedHash.h) {
    const home = ownProps.data.homes.find(h => h.name === parsedHash.h)
    if (home) {
      currentHome = home
      initialValues.city = home.neighborhood.city.name
    }
  }
  if (parsedHash.c) {
    const sanitize = {
      'New York City': 'New York',
      'San Francisco Bay Area': 'San Francisco'
    }
    initialValues.city = sanitize[parsedHash.c] || parsedHash.c
  }
  if (parsedHash.st) {
    initialValues.suiteType = parsedHash.st
  }
  if (parsedHash.partner) {
    initialValues.partner = parsedHash.partner
  }
  // NOTE: Only name, email, and phone are base64 encoded
  if (parsedHash.n) {
    initialValues.name = atob(parsedHash.n)
  }
  if (parsedHash.e) {
    initialValues.email = atob(parsedHash.e)
  }
  if (parsedHash.p) {
    initialValues.phone = atob(parsedHash.p)
  }

  const { data } = state.remoteApplication

  if (data.fields.interested_in && !parsedHash.h) {
    initialValues.city = data.fields.interested_in.value
  }

  if (data.fields.name && !parsedHash.n) {
    initialValues.name = data.fields.name.value
  }
  if (data.fields.email && !parsedHash.e) {
    initialValues.email = data.fields.email.value
  }
  if (data.fields.phone_number && !parsedHash.p) {
    initialValues.phone = data.fields.phone_number.value
  }
  if (data.fields.duration) {
    initialValues.duration = data.fields.duration.value
  }
  if (data.fields.budget) {
    initialValues.budget = data.fields.budget.value
  }

  return {
    initialValues,
    currentHome,
    formValues: (state.form.apply && state.form.apply.values) || {},
  }
}

Form = connect(mapStateToProps)(Form)
Form = reduxForm({
  form: 'apply',
  // enableReinitialize and keepDirtyOnReinitialize are important
  //  so that our delayed update to initialValues takes effect in each child form
  keepDirtyOnReinitialize: true,
  enableReinitialize: true,
})(Form)

export default Form
