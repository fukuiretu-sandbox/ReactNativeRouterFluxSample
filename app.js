import React, { Component } from 'react';
import { Text } from 'react-native'
import { Router, Scene } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './src/reducers';
import PageOne from './src/PageOne';
import PageTwo from './src/PageTwo';
import PageThree from './src/PageThree';
import logger from 'redux-logger';

const RouterWithRedux = connect()(Router);
const middleware = [logger];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(reducers);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Scene key="tabbar" tabs={true} >
            <Scene key="tab1" component={PageOne} title="page one" icon={TabIcon} initial={true} />
            <Scene key="tab2" component={PageTwo} title="page two" icon={TabIcon}/>
            <Scene key="tab3" component={PageThree} title="page th" icon={TabIcon}/>
          </Scene>
        </RouterWithRedux>
      </Provider>
      // <Router>
      //   {/* <Scene key="root">
      //     <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
      //     <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
      //   </Scene> */}
      //   <Scene key="tabbar" tabs={true} >
      //     <Scene key="tab1" component={PageOne} title="page one" icon={TabIcon} initial={true} />
      //     <Scene key="tab2" component={PageTwo} title="page two" icon={TabIcon}/>
      //     <Scene key="tab3" component={PageThree} title="page th" icon={TabIcon}/>
      //   </Scene>
      // </Router>
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
