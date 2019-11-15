// import React, {Component} from 'react';
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


interface NavBarProps {
  // Define props in here
}

interface NavBarState {
  // Define state in here
}

export class NavBar extends React.Component<NavBarProps, NavBarState> {

  componentWillMount () {

  }

  componentDidMount () {

  }
  public classes: any

  useStyles () {
    return makeStyles((theme: Theme) =>
      createStyles({
        root: {
          flexGrow: 1,
        },
        menuButton: {
          marginRight: theme.spacing(2),
        },
        title: {
          flexGrow: 1,
        },
      }),
    )
  }

  render () {
   this.classes = this.useStyles()
    // console.log(classes)
    return (
      <div className={this.classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={this.classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={this.classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}