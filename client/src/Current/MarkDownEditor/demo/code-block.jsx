import React from 'react'
import PropTypes from 'prop-types'
// const hljs = window.hljs

class CodeBlock extends React.PureComponent {
  constructor (props) {
    super(props)
    this.setRef = this.setRef.bind(this)
  }

  setRef (el) {
    this.codeEl = el
  }

  // componentDidMount() {
  //   this.highlightCode()
  // }

  // componentDidUpdate() {
  //   this.highlightCode()
  // }

  // highlightCode() {
  //   hljs.highlightBlock(this.codeEl)
  // }

  render () {
    return (
      <pre>
        <code ref={this.setRef} className={this.props.language}>
          {this.props.value}
        </code>
      </pre>
    )
  }
}

CodeBlock.defaultProps = {
  language: ''
}

CodeBlock.propTypes = {
  value: PropTypes.string.isRequired,
  language: PropTypes.string
}

export default CodeBlock
