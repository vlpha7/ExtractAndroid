import React from 'react';

import { getGraphState } from '../apis'
import ApiTemplate from './ApiTemplate.jsx';
import PermissionTemplate from './PermissionTemplate.jsx';

export default class StatePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      graphState: null
    }
  }

  componentDidMount() {
    getGraphState().then(res => this.setState({ graphState: res.body }));
  }

  render() {
    const { graphState } = this.state;

    return (
      <div style={{height: '100%'}}>
        {graphState ? 
          <div className="row" style={{padding: '0px 30px'}}>
            <div className="col-2">
              <div>Number of APIs: {graphState.numApi}</div>
              <div>Number of APKs: {graphState.numApk}</div>
              <div>Number of Permissions: {graphState.numPermission}</div>
            </div>
            <div className="col-5">
              <h3>Top 10 Permissions used by APKs</h3>
              {graphState.top10Permissions.map((p, idx) => <PermissionTemplate key={idx} data={p}/>)}
            </div>
            <div className="col-5">
              <h3>Top 10 APIs used by APKs</h3>
              {graphState.top10Apis.map((a, idx) => <ApiTemplate key={idx} data={a}/>)}
            </div>
          </div>
        : <div> Loading </div>
        }
      </div>
    );
  }
}
