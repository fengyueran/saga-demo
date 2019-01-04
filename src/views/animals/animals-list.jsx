import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { VerticalBox, LineBox, Button } from '@xinghunm/widgets';

const Title = styled.h4`
  color: blue;
`;

const StyledBtn = styled(Button)`
  width: 120px;
`;

class AnimalsList extends Component {
  componentWillMount() {
    const { dataRequest } = this.props;
    dataRequest();
  }

  render() {
    const { 
      cats, dogs, fishes, fishDataRequest, timeoutError,
      startBGTask, cancelBGTask
    } = this.props;

    return (
      <VerticalBox>
        AnimalsList
        <StyledBtn onClick={fishDataRequest}>Load Fish</StyledBtn>
        <LineBox>
          <StyledBtn onClick={startBGTask}>Start Task</StyledBtn>
          <StyledBtn onClick={cancelBGTask}>Cancel Task</StyledBtn>
        </LineBox>
       
        <Title>Cats:</Title>
        {
          cats.map(v => <span key={v}>{v}</span>)
        }
        <Title>Dogs:</Title>       
        {
          dogs.map(v => <span key={v}>{v}</span>)
        }
        <Title>Fishes:</Title>       
        {
          timeoutError ? 'timeout error' : fishes.map(v => <span key={v}>{v}</span>)
        }
      </VerticalBox>
    );
  }
}
AnimalsList.propTypes = {
  cats: PropTypes.array,
  dogs: PropTypes.array,
  fishes: PropTypes.array,
  timeoutError: PropTypes.bool,
  startBGTask: PropTypes.func.isRequired,
  cancelBGTask: PropTypes.func.isRequired,
  dataRequest: PropTypes.func.isRequired,
  fishDataRequest: PropTypes.func.isRequired,
};


export default AnimalsList;
