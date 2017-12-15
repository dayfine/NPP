import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'
// import CodeMirror = window.CodeMirrorEditor
import PropTypes from 'prop-types'

import { withStyles } from 'material-ui/styles'

// CodeMirror Dependencies
// import './index.css'
import 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/markdown/markdown'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'

// function Editor(props) {
//   return (
//     <form className="editor pure-form">
//       <CodeMirror mode="markdown" theme="monokai" value={props.value} onChange={props.onChange} />
//     </form>
//   )
// }

class Editor extends React.Component {
  // state = {
  //   value: '<h1>I ♥ react-codemirror2</h1>'
  // }

  onBeforeChange=(editor, data, value) => {
    console.log(editor, data, value)
    // this.setState({ value })
    this.props.onChange(value)
  }

  render () {
    const { classes } = this.props
    return (
      <form className='editor pure-form'>
        <CodeMirror
          value={this.props.value}
          options={{
            mode: 'markdown',
            theme: 'monokai',
            lineNumbers: false
          }}
          // onBeforeChange={this.onBeforeChange}
          onChange={this.onBeforeChange}
          // className='CodeMirror'
        />
      </form>
    )
  }
}

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
    minHeight: '500px',
    background: 'rgba(72, 72, 72, 0)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    border: '1px solid rgba(72, 72, 72, 0.1)',
    boxShadow: 'none'
  }
})

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string
}

Editor.defaultProps = {
  value: ''
}

export default withStyles(styles)(Editor)
