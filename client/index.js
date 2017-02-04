import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';

injectTapEventPlugin();

//icons
const eligibilityIcon = <FontIcon className="material-icons"

class App extends React.Component {
  render(){
    return (
      <div>
        <Paper zDepth={1}>
          <img className="snap-logo" src="./images/SNAPlogo.png"></img>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              label="Eligibility"
              icon={recentsIcon}
              onTouchTap={() => this.select(0)}
            />
            <BottomNavigationItem
              label="More Info"
              icon={favoritesIcon}
              onTouchTap={() => this.select(1)}
            />
          </BottomNavigation>
        </Paper>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
