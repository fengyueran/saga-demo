import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  height: 30px;
`;

const Counter = ({ 
  value, onIncrement, onDecrement, onIncrementAsync
}) => (
  <Wrapper>
    <Button onClick={() => global.store.dispatch({ type: 'INCREMENT_ASYNC' })}>
      Increment after 1 second
    </Button>
    {' '}
    <Button onClick={onIncrement}>
      Increment
    </Button>
    {' '}
    <Button onClick={onDecrement}>
      Decrement
    </Button>
    <hr />
    <div>
      Clicked: {value} times
    </div>
  </Wrapper>);

Counter.propTypes = {
  value: propTypes.number,
  onIncrement: propTypes.number,
  onDecrement: propTypes.number,
  onIncrementAsync: propTypes.number
};

export default Counter;