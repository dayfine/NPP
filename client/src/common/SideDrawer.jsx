import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import { withStyles } from 'material-ui/styles'
import Drawer from 'material-ui/Drawer'
import Button from 'material-ui/Button'
import List, { ListItem } from 'material-ui/List'
import Divider from 'material-ui/Divider'

import CurrentList from '../Current'

class SideDrawer extends React.Component {
  state = {
    open: false,
  }

  toggleDrawer = (open) => () => {
    this.setState({ open })
  }

  render() {
    const { classes } = this.props

    const sideList = (
      <div className={classes.list}>
        <List>
          <ListItem>
            Current List
          </ListItem>
        </List>
        <List>
        {CurrentList.map(_=>(
          <ListItem
            key={_.name}
            component={Link}
            to={`/${_.path}`}
          >
            {_.name}
          </ListItem>
        ))}
        </List>
        <Divider />
        Archived
      </div>
    )

    return (
      <div>
        <Button onClick={this.toggleDrawer(true)}>Open Drawer</Button>
        <Drawer
          open={this.state.open}
          onRequestClose={this.toggleDrawer(false)}
        >
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer(false)}
            onKeyDown={this.toggleDrawer(false)}
          >
            {sideList}
          </div>
        </Drawer>
      </div>
    );
  }
}

const styles = {
  list: {
    width: 250,
  },
  listFull: {
    width: 'auto',
  },
}

SideDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(SideDrawer)
