import React from 'react'
import { UnControlled as CodeMirror } from 'react-codemirror2'

function MDE (props) {
  return (
    <div>
      <CodeMirror
        value='<h1>I ♥ react-codemirror2</h1>'
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true
        }}
        onChange={(editor, data, value) => {
          console.log(data, value)
        }}
      />
    </div>
  )
}

export default MDE
