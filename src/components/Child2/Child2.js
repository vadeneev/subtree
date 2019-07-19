import React from 'react';
import { connect } from 'react-redux';
import { actions } from 'actions/actions';


function Child({ inc, dec, count }) {
  return (
    <div className="Child">
      Child repo 2 version 4

      <button onClick={inc}>Increment</button>
      <button onClick={dec}>Decrement</button>
      <div>Value: {count}</div>

    </div>
  );
}

const mapStateToProps = ({ counter }) => {
  return { count: counter.count };
};

export default connect(mapStateToProps, actions)(Child);
