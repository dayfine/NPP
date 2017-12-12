import React from 'react'
import { Controlled as CodeMirror } from 'react-codemirror2'

import { withStyles } from 'material-ui/styles'

require('./index.css')
require('codemirror')
require('codemirror/lib/codemirror.css')
require('codemirror/mode/xml/xml')
require('codemirror/mode/javascript/javascript')
require('codemirror/theme/monokai.css')

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
      <div className={classes.root}>
        <CodeMirror
          value={this.state.value}
          options={{
            mode: {name: 'javascript', json: true},
            theme: 'monokai',
            lineNumbers: false
          }}
          onBeforeChange={this.onBeforeChange}
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
