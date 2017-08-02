import { Component } from 'react';
import ApplyButton from 'components/ApplyButton';
import viewport from 'lib/viewportVariables';
import ApplyButtonPathHelper from 'lib/ApplyButtonPathHelper';


export default class WaitlistSignup extends Component {
  constructor (props) {
    super(props);
    this.state = {
      applyButtonPath: this.getApplyUrl()
    };
  }

  getApplyUrl (additionalOpts = {}) {
    const opts = {
      ...additionalOpts,
      home: this.props.home.name,
      city: this.props.home.neighborhood.city.name
    }
    return new ApplyButtonPathHelper(opts).fullPath;
  }

  submitEmail (e, path) {
    if (this.state.isEmailInvalid) {
      e.preventDefault();
    }
  }

  updateEmail (e) {
    const isEmailInvalid = !e.nativeEvent.target.checkValidity();
    const email = e.target.value;

    this.setState({
      applyButtonPath: this.getApplyUrl({email}),
      email,
      isEmailInvalid
    });
  }

  render() {
    const { home } = this.props;
    const homeName = home.name;
    const cityName = home.neighborhood.city.name;
    return (
      <div>
        <input type='email' className={this.state.isEmailInvalid ? 'invalid' : ''} placeholder='Enter your email to get updates' onChange={(e) => this.updateEmail(e)}/>
        <ApplyButton
          text='JOIN THE WAITLIST'
          opts={
            {
              onClick: (e) => this.submitEmail(e),
              id: 'waitlist-cta',
              path: this.state.applyButtonPath
            }
          }
        />
        <style jsx>{`
          input {
            float: left;
            color: #272827;
            height: 57px;
            border: none;
            border-bottom-left-radius: 2px;
            border-top-left-radius: 2px;
            border-bottom-right-radius: 0px;
            border-top-right-radius: 0px;
            padding: 0 10px;
            width: 318px;
          }
          @media (max-width: ${viewport.mobile}px) {
            input {
              width: 230px;
              margin-bottom: 10px;
              border-bottom-right-radius: 2px;
              border-top-right-radius: 2px;
            }
          }
          input.invalid {
            animation-duration: 0.82s;
            animation-timing-function: cubic-bezier(.36,.07,.19,.97);
            animation-name: shake;
            animation-fill-mode: both;
            transform: translate3d(0, 0, 0);
            backface-visibility: hidden;
            perspective: 100px;
            color: #d34d35;
          }
          input:focus{
            outline: none;
          }
          :global(#waitlist-cta) {
            float: right;
            border-bottom-left-radius: 0px;
            border-top-left-radius: 0px;
            padding-right: 38px;
            padding-left: 38px;
          }
          @media (max-width: ${viewport.mobile}px) {
            :global(#waitlist-cta) {
              width: 230px;
              border-bottom-left-radius: 2px;
              border-top-left-radius: 2px;
            }
          }
          div {
            width: 530px;
            margin: 50px auto;
          }
          @media (max-width: ${viewport.mobile}px) {
            div {
              width: 230px;
              display: flex;
              flex-direction: column
            }
          }
          @keyframes shake {
            10%, 90% {
              transform: translate3d(-1px, 0, 0);
            }

            20%, 80% {
              transform: translate3d(2px, 0, 0);
            }

            30%, 50%, 70% {
              transform: translate3d(-4px, 0, 0);
            }

            40%, 60% {
              transform: translate3d(4px, 0, 0);
            }
          }
        `}</style>
      </div>
    )
  }
}
