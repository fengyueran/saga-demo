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
  value, onIncrement, onDecrement, onIncrementAsync,
}) => (
  <Wrapper>
    <Button onClick={onIncrementAsync}>
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
  onIncrement: propTypes.func,
  onDecrement: propTypes.func,
  onIncrementAsync: propTypes.func
};

export default Counter;