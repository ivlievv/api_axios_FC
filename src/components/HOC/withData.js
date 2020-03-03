import React, { Component } from 'react';

function withData (loadData, WrappedComponent) {

  return class extends Component {

    constructor (props) {
      super( props );
      this.state = {
        isFetching: true,
        items: [],
        error: null,
      };
    }

    componentDidMount () {
      this.setState( {
                       isFetching: true,
                     } );
      try {
        loadData()
          .then( response => {
            this.setState( {
                             items: response.data,
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
    }

    render () {

      return (
        <WrappedComponent {...this.state} {...this.props}/>
      );
    }
  };
}

export default withData;
