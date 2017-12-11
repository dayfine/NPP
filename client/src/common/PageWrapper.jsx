import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'

function PageWrapper ({ classes, children }) {
  return (
    <div className={classes.wrapper}>
      {children}
    </div>
  )
}

const styles = {
  wrapper: {
    maxWidth: 967,
    margin: '0 auto'
  }
}

PageWrapper.propTypes = {
  classes: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired
}

export default withStyles(styles)(PageWrapper)
