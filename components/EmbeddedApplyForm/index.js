import React from 'react';
import ApplyButton from 'components/ApplyButton';
import docCookies from 'doc-cookies';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';

// TODO: This form needs to be refactored to share syncing logic with the main form.
export default class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      homeName: this.props.homeName,
      cityName: this.props.cityName
    };
  }
  findOrCreateApplication() {
    return Promise.resolve()
      .then(() => {
        if (!!this.state.uuid) {
          return this.state.uuid;
        } else if (!!docCookies.getItem('cmn-uuid')) {
          const uuid = docCookies.getItem('cmn-uuid');
          return this.setState({ uuid });
        } else {
          return this.createApplication();
        }
      })
      .then(uuid => {
        return uuid;
      })
      .catch(err => {
        console.error(err);
        throw new Error(err);
      });
  }
  createApplication() {
    return window
      .fetch('https://app.common.com/applications', {
        method: 'POST'
      })
      .then(data => data.json())
      .then(data => {
        const uuid = data.uuid;
        docCookies.setItem('cmn-uuid', uuid, Infinity, '/');
        return this.setState({ uuid });
      })
      .then(() => {
        return this.state.uuid;
      })
      .catch(err => {
        console.error(
          'An error occurred during the creation of the application'
        );
        throw new Error(err);
      });
  }
  getFormAttributes() {
    const data = {
      application: {
        id: this.state.uuid,
        uuid: this.state.uuid,
        fields: {}
      }
    };
    const fields = data.application.fields;
    for (let key in this.state) {
      switch (key) {
        case 'homeName':
          fields['home'] = {
            title: 'Home applied to',
            value: this.state[key]
          };
          break;
        case 'cityName':
          fields['interested_in'] = {
            title: 'Which city are you interested in?',
            value: this.state[key]
          };
          break;
        case 'name':
          fields['name'] = {
            title: 'Your Name',
            value: this.state[key]
          };
          break;
        case 'email':
          fields['email'] = {
            title: 'What is your email address?',
            value: this.state[key]
          };
          break;
        case 'phone':
          fields['phone'] = {
            title: 'Phone Number',
            value: this.state[key]
          };
          break;
      }
    }
    return data;
  }
  updateApplication(formData) {
    return window
      .fetch(
        `https://app.common.com/applications/${formData.application.uuid}`,
        {
          body: JSON.stringify(formData),
          method: 'PUT',
          headers: new Headers({ 'Content-Type': 'application/json' })
        }
      )
      .catch(err => {
        console.error(err);
        throw new Error(err);
      });
  }
  syncForm() {
    return this.findOrCreateApplication()
      .then(uuid => {
        if (this.state.email) {
          const formData = this.getFormAttributes();
          return this.updateApplication(formData);
        }
      })
      .catch(err => {
        console.error(err);
        if (typeof Raven !== 'undefined') {
          Raven.captureException(err);
        }
      });
  }
  keyPress(e) {
    const stateUpdate = { [e.target.name]: e.target.value };
    const isEnterKey = e.charCode === 13;
    const functionToExecute = isEnterKey
      ? this.syncAndSubmitForm.bind(this)
      : this.syncForm.bind(this);
    this.setState(stateUpdate, () => {
      functionToExecute();
    });
  }
  syncAndSubmitForm() {
    return this.syncForm()
      .then(() => {
        this.redirectToApplyForm();
      })
      .catch(err => {
        console.error(err);
        if (typeof Raven !== 'undefined') {
          Raven.captureException(err);
        }
        this.redirectToApplyForm();
      });
  }
  redirectToApplyForm() {
    const pathHelper = new ApplyButtonPathHelper({
      name: this.state.name,
      phoneNumber: this.state.phone,
      email: this.state.email,
      home: this.props.homeName,
      city: this.props.cityName
    });
    window.location = pathHelper.fullPath;
  }
  render() {
    const pathHelper = new ApplyButtonPathHelper({
      name: this.state.name,
      phoneNumber: this.state.phone,
      email: this.state.email,
      home: this.props.homeName,
      city: this.props.cityName
    });
    return (
      <section className="info-box flex justify-center flex-column">
        <h2>Common</h2>
        <h1 id="home-name">
          {this.props.homeName}
        </h1>
        <h2 className="sub-caption">
          {this.props.homeDescription}
        </h2>
        <form className="embedded-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              autoComplete="name"
              placeholder="Full Name"
              onKeyPress={this.keyPress.bind(this)}
              onBlur={this.syncForm.bind(this)}
            />
            <span className="bar" />
          </div>
          <div className="input-group">
            <input
              type="email"
              name="email"
              data-title="What is your email address?"
              autoComplete="email"
              placeholder="Email"
              onKeyPress={this.keyPress.bind(this)}
              onBlur={this.syncForm.bind(this)}
            />
            <span className="bar" />
          </div>
          <div className="input-group">
            <input
              type="tel"
              name="phone_number"
              autoComplete="tel"
              placeholder="Phone Number"
              onKeyPress={this.keyPress.bind(this)}
              onBlur={this.syncForm.bind(this)}
            />
            <span className="bar" />
          </div>
          <ApplyButton
            opts={{
              onClick: e => this.syncAndSubmitForm(),
              path: pathHelper.fullPath,
              classes: 'btn btn-red btn-xl embedded-cta'
            }}
          />
        </form>
      </section>
    );
  }
}
