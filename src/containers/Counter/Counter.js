import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../store/actions/';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onCounterIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onCounterDecrement}  />
                <CounterControl label="Add 5" clicked={this.props.onCounterAdd}  />
                <CounterControl label="Subtract 5" clicked={this.props.onCounterSubtract}  />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                  {this.props.storedResults.map((result, i) => <li key={i} onClick={() => this.props.onRemoveResult(i)}>{result}</li>)}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
  return {
    ctr: state.ctr.counter,
    storedResults: state.res.results
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onCounterIncrement: () => dispatch(actionCreators.increment()),
    onCounterDecrement: () => dispatch(actionCreators.decrement()),
    onCounterAdd: () => dispatch(actionCreators.add(5)),
    onCounterSubtract: () => dispatch(actionCreators.subtract(5)),
    onStoreResult: result => dispatch(actionCreators.storeResult(result)),
    onRemoveResult: index => dispatch(actionCreators.removeResult(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);