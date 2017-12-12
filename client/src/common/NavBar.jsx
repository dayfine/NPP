import React from 'react'
import { Link } from 'react-router-dom'

import SideDrawer from './SideDrawer'

import { withStyles } from 'material-ui/styles'
import Button from 'material-ui/Button'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'

const NavBar = ({ classes }) => {
  return (
    <AppBar className={classes.root}>
      <Toolbar className={classes.flex}>
        <SideDrawer />
        <Button
          component={Link}
          to='/'
        >
          Home
        </Button>
      </Toolbar>
    </AppBar>
  )
}

const styles = theme => ({
  root: {
    width: '100%',
    background: 'rgba(72, 72, 72, 0)',
    border: '1px solid rgba(72, 72, 72, 0.1)',
    boxShadow: 'none'
  },
  flex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})

export default withStyles(styles)(NavBar)
