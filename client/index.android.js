import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import Draw from './components/Draw';
import Friends from './components/Friends';
import HomePage from './components/HomePage';
import Nearby from './components/Nearby';
import Notifications from './components/Notifications';
import OtherUsers from './components/OtherUsers';
import Photos from './components/Photos';
import Profile from './components/Profile';
import Settings from './components/Settings';
import ViewFinder from './components/ViewFinder';

const AR = () => {
  return (
    <Router>
      <Scene key="root">
        <Scene key="homepage"
          component={HomePage}
          title="Home Page"
          initial
        />
        <Scene key="settings"
          component={Settings}
          title="Settings"
        />

        <Scene key="viewfindermain" tabs={true}>
          <Scene
            key="viewfinder"
            component={ViewFinder}
            title="View Finder"
          />
          <Scene
            key="nearby"
            component={Nearby}
            title="Nearby"
          />
        </Scene>

        <Scene key="photos"
          component={Photos}
          title="Photos"
        />
        <Scene key="profilemain" tabs={true}>
          <Scene
            key="profile"
            component={Profile}
            title="Profile"
          />
          <Scene
            key="friends"
            component={Friends}
            title="Friends"
          />
          <Scene
            key="other users"
            component={OtherUsers}
            title="Other Users"
          />
        </Scene>

        <Scene
          key="draw"
          component={Draw}
          title="Draw"
        />
        <Scene
          key="notifications"
          component={Notifications}
          title="Notifications"
        />
      </Scene>
    </Router>
  );
}

const styles = StyleSheet.create({
  tabbar: {
    alignItems: 'flex-start'
  },
});

AppRegistry.registerComponent('AR', () => AR);
