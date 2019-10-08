import React from 'react';

import SearchBar from './SearchBar.jsx';
import ApiTemplate from './ApiTemplate.jsx';
import ApkTemplate from './ApkTemplate.jsx';

import { getSearchByApiName } from '../apis'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchBarHeight: '100%',
      detail: null
    }
    this.searchFunction = this.searchFunction.bind(this);
  }

  async searchFunction(text) {
    console.log(text);
    //this.state.data === mockData ? this.setState({data: mockDataEmpty}) : this.setState({data: mockData});
    //this.state.searchBarHeight === '100%' ? this.setState({searchBarHeight: '10%'}) : this.setState({searchBarHeight: '100%'});
    const { detail, apks } = await getSearchByApiName(text);
    console.log(detail)
    console.log(apks)
    this.setState({ detail, data: apks })
  }

  render() {
    const { data, detail } = this.state;
    console.log(data.length)

    return (
      <div style={{height: '100%'}}>
        <SearchBar height={data.length === 0 ? '100%' : '10%'} searchFunction={this.searchFunction}/>
        <div className="row" style={{padding: '0px 30px'}}>
          <div className="col-8">
            {data.map((d, idx) => {
                return (
                  <ApkTemplate key={d} data={d}/>
                );
              })
            }
          </div>
          <div className="col-4">
            {detail ?
              <ApiTemplate data={detail}/>
            : null}
          </div>
        </div>
      </div>
    );
  }
}
