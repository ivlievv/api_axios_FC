import React, { Component } from 'react';
import PropTypes            from 'prop-types';

class DataLoader extends Component {

  constructor (props) {
    super( props );
    this.state = {
      isFetching: false,
      data: null,
      error: null,
    };
  }

  loadData = () => {
    this.setState( {
                     isFetching: true,
                   } );
    try {
      this.props.loadData().then( response => {
        this.setState( {
                         data: response.data,
                       } );
      } );

    } catch (e) {
      this.setState( {
                       error: e,
                     } );
    } finally {
      this.setState( {
                       isFetching: false,
                     } );
    }
  };

  componentDidMount () {
    this.loadData();
  }

  render () {
    const { render } = this.props;
    return render( this.state );
  }
}

DataLoader.propTypes = {
  loadData: PropTypes.func.isRequired,
  render: PropTypes.func.isRequired,

};

export default DataLoader;