import React, { Component } from 'react';
import { Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';

export default class App extends Component {
  render() {
    return (
      <Router>
        {/* <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene> */}
        <Scene key="tabbar" tabs={true} >
          <Scene key="tab1" component={PageOne} title="page one" icon={TabIcon} initial={true} />
          <Scene key="tab2" component={PageTwo} title="page two" icon={TabIcon}/>
        </Scene>
      </Router>
    )
  }
}

class TabIcon extends React.Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}
