import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

function MainWrapper ({ classes, children }) {
  return (
    <main className={classes.root}>
      {children}
    </main>
  )
}

const styles = {
  root: {
    maxWidth: 967,
    minHeight: '100%',
    height: '100%',
    margin: '0 auto',
    padding: '120px 24px 0 24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start'
  }
}

MainWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

export default withStyles(styles)(MainWrapper)
