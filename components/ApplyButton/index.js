import React from 'react'
import PropTypes from 'prop-types'

export default class extends React.Component {
  static propTypes = {
    opts: PropTypes.shape({
      path: PropTypes.string.isRequired
    })
  }

  clickHandler(e) {
    if (this.props.opts && this.props.opts.onClick) {
      this.props.opts.onClick(e);
    }
  }

  render () {
    const text = this.props.text || 'LEARN MORE';
    const classNames = this.props.opts && this.props.opts.classes ? this.props.opts.classes : 'btn btn-red btn-xl';
    const id = this.props.opts && this.props.opts.id ? this.props.opts.id : null;
    const path = this.props.opts.path;
    
    return (
      <a className={classNames} id={id} href={path} onClick={(e) => this.clickHandler(e) } >
        {text}
      </a>
    )
  }
}
