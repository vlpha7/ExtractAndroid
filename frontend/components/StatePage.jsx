import React from 'react';

import { getSearchByApiName } from '../apis'

export default class StatePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{height: '100%'}}>
        <div>Number of Nodes: 1000</div>
        <div>Number of Relationships: 1000</div>
        <div>Number of APIs: 1000</div>
        <div>Number of APKs: 1000</div>
      </div>
    );
  }
}
