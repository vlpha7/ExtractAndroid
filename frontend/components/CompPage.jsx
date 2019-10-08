import React from 'react';

import { getSearchByApiName } from '../apis'

export default class CompPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        Compatible
      </div>
    );
  }
}
