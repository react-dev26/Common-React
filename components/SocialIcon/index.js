import React from 'react';

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { imgSrc: '' }
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut  = this.handleMouseOut.bind(this)
  }

  componentWillMount() {
    this.setState({ imgSrc:this.props.src })
  }

  handleMouseOver() {
    this.setState({ imgSrc: this.props.srcOnHover })
  }

  handleMouseOut() {
    this.setState({ imgSrc: this.props.src })
  }

  render () {
    return (
      <img
        alt={ this.props.alt }
        src={ this.state.imgSrc }
        onMouseOver={ this.handleMouseOver }
        onMouseOut={ this.handleMouseOut }
      />
    )
  }
}
