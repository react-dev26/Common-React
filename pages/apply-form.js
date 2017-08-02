import React, { Component, PropTypes } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import 'whatwg-fetch'
import docCookies from 'doc-cookies'
import ApplyForm from 'components/ApplyForm'
import Head from 'next/head'
import NoSSR from 'react-no-ssr'
import PageHead from 'components/PageHead'
import PageBody from 'components/PageBody'
import injectTapEventPlugin from 'react-tap-event-plugin';


const remoteApplication = (state = {data: {fields: {}}}, action) =>  {
  if (action.type === 'APPLICATION_LOADED') {
    return {...state, data: action.application}
  }
  return state
}

const reducer = combineReducers({
  remoteApplication,
  form: reduxFormReducer
})

const store = createStore(reducer)

const goBack = () => {
  // Return back to the website
  window.location = "/"
}

const updateApplication = (formState) => {
  let fields = {}
  let formData = {}

  // All of this will be removed once we change the api.
  // Only here to add the useless "Title" variables
  if (formState.name) {
    const toAdd = {
      "title": "Your Name",
      "value": formState.name
    }
    fields.name = toAdd
  }
  if (formState.email) {
    const toAdd = {
      "title": "What is your email address?",
      "value": formState.email
    }
    fields.email = toAdd
  }
  if (formState.phone) {
    const toAdd = {
      "title": "Phone Number",
      "value": formState.phone
    }
    fields.phone_number = toAdd
  }
  if (formState.budget) {
    const toAdd = {
      "title": "What is your budget?",
      "value": formState.budget
    }
    fields.budget = toAdd
  }
  if (formState.duration) {
    const toAdd = {
      "title": "How long do you plan to stay?",
      "value": formState.duration
    }
    fields.duration = toAdd
  }
  if (formState.home) {
    const toAdd = {
      "title": "Home applied to",
      "value": formState.home
    }
    fields.home = toAdd
  }
  if (formState.year) {
    const toAdd = {
      "title": "What is your ideal move date?",
      "value": formState.month +', '+ formState.year
    }
    fields.move_date = toAdd
  }
  if (formState.city) {
    const toAdd = {
      "title": "Which city are you interested in?",
      "value": formState.city
    }
    fields.interested_in = toAdd
  }
  if (formState.referred_by) {
    const toAdd = {
      "title": "Source",
      "value": formState.referred_by
    }
    fields.source = toAdd
  }
  if (formState.suiteType) {
    fields.suite_type = {
      "title": "Suite applied to",
      "value": formState.suiteType
    }
  }
  if (formState.partner) {
    fields.partner = {
      "title": "Partner referred by",
      "value": formState.partner
    }
  }
  if (formState.other_source) {
    const toAdd = {
      "title": "Source",
      "value": formState.other_source
    }
    fields.source = toAdd
  }

  formData.fields = fields
  formData.uuid = docCookies.getItem('cmn-uuid')

  // Update the api with new form values
  window.fetch(`https://app.common.com/applications/${formData.uuid}`, {
    body: JSON.stringify({ application: formData }),
    method: 'PUT',
    headers: new Headers({"Content-Type": "application/json"})
  }).catch(err => console.error(errorThrown))
}

const muiTheme = getMuiTheme({
  // Unsure if we want to keep the ripple effect (the code below removes it)

  ripple: {
    color: 'rgba(224, 224, 224, 1)'
  },
  fontFamily: 'Titillium\ Web',
  palette: {
    primary1Color: 'rgb(211, 77, 53)',
    primary2Color: 'rgb(211, 77, 53)',
    primary3Color: 'rgb(211, 77, 53)',
    accent1Color: 'rgb(211, 77, 53)',
    pickerHeaderColor: 'rgb(211, 77, 53)'
  },
})

class Page extends Component {
  componentDidMount() {
    injectTapEventPlugin()
  }

  render () {
    const { data, urlSlug } = this.props
    return (
      <div>
        <PageHead 
          pageTitle={'Application Form | Common'}
          pageSlug={urlSlug}
        />
        <PageBody fullScreen={true} cities={data.cities}>
          <NoSSR onSSR={<div></div>}>
            <Provider store={store}>
              <MuiThemeProvider muiTheme={muiTheme}>
                <div className='learn'>
                  <div className='learn-wrap'>
                    <ApplyForm data={data} updateApplication={updateApplication} onSubmit={goBack} />
                  </div>
                </div>
              </MuiThemeProvider>
            </Provider>
          </NoSSR>
        </PageBody>
      </div>
    )
  }
}

Page.getInitialProps = async ({ query, req }) => {
  return {
    data: query.data,
    urlSlug: req.originalUrl
  }
}

export default Page
