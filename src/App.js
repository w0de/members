import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {red500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';


class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <FlatButton {...this.props} label="Login" />
    );
  }
}

function handleClick() {
  alert('onClick triggered on the title component');
}

const muiTheme = getMuiTheme({
  palette: {
    primary1Color:red500,
    onTitleClick:{handleClick}

  },
});

const styles = {
  title: {
    cursor: 'pointer',
  },
};

const Logged = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="My Profile" />
    <MenuItem primaryText="Edit Profile" />
    <MenuItem primaryText="Sign out" />
  </IconMenu>
);


Logged.muiName = 'IconMenu';

/**
 * This example is taking advantage of the composability of the `AppBar`
 * to render different components depending on the application state.
 */
class App extends Component {
  state = {
    logged: true,
  };

  handleChange = (event, logged) => {
    this.setState({logged: logged});
  };

  render() {
    return (
    <MuiThemeProvider muiTheme={muiTheme}>
      <div>
        <AppBar
          iconElementRight={this.state.logged ? <Logged /> : <Login />}
          title={<span style={styles.title}>Search</span>}
        />
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;