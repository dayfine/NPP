import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

import { withStyles } from 'material-ui/styles'

// CodeMirror Dependencies
import './index.css'
import 'codemirror'
import 'codemirror/lib/codemirror.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/theme/monokai.css'

class Editor extends React.Component {
  state = {
    value: '<h1>I ♥ react-codemirror2</h1>'
  }

  onBeforeChange=(editor, data, value) => {
    console.log(editor, data, value)
    this.setState({ value })
  }

  render() {
    const { classes } = this.props
    return (
      <div className='editor-pane'>
        <CodeMirror
          value={this.state.value}
          options={{
            mode: {name: 'javascript', json: true},
            theme: 'monokai',
            lineNumbers: false
          }}
          onBeforeChange={this.onBeforeChange}
          className='CodeMirror'
        />
      </div>
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

export default withStyles(styles)(Editor)
