import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimalsList extends Component {
  componentWillMount() {
    const { dataRequest } = this.props;
    dataRequest();
  }

  render() {
    const { cats, dogs } = this.props;

    return (
      <div>
        AnimalsList
        {
          cats.map(v => <span>{v}</span>)
        }
        {
          dogs.map(v => <span>{v}</span>)
        }
      </div>
    );
  }
}
AnimalsList.propTypes = {
  cats: PropTypes.array,
  dogs: PropTypes.array,
  dataRequest: PropTypes.func.isRequired
};


export default AnimalsList;
