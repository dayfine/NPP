import React from 'react'
import { Link } from 'react-router-dom'

import SideDrawer from './SideDrawer'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

const NavBar = ({ classes }) => {
  return (
    <AppBar className={classes.root}>
      <Toolbar>
        <SideDrawer />
      </Toolbar>
    </AppBar>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    background: 'rgba(72, 72, 72, .05)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItem: 'center'
  }
})

export default withStyles(styles)(NavBar)
