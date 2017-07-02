import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import Counter from './components/counter'
import * as counterActions from './actions/counterActions'
import { connect } from 'react-redux'

class PageThree extends Component {
  render() {
    const { count, actions } = this.props;
    return (
      <Counter
        count={count}
        {...actions}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // Note: stateにはsrc/reducers/counter.jsのfunction counterが含まれてくる
    count: state.counter.count
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(counterActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PageThree)
