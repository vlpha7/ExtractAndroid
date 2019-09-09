import React from 'react';
import SearchBar from './SearchBar.jsx';
import ApiTemplate from './ApiTemplate.jsx';
import ApkTemplate from './ApkTemplate.jsx';

import { getSearchByApiName } from '../apis'

const mockData = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const mockDataEmpty = [];

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: mockDataEmpty,
      searchBarHeight: '100%'
    }
    this.searchFunction = this.searchFunction.bind(this);
  }

  searchFunction(text) {
    console.log(text);
    this.state.data === mockData ? this.setState({data: mockDataEmpty}) : this.setState({data: mockData});
    //this.state.searchBarHeight === '100%' ? this.setState({searchBarHeight: '10%'}) : this.setState({searchBarHeight: '100%'});
    getSearchByApiName(text);
  }

  render() {
    const {data} = this.state;

    return (
      <div style={{height: '100%'}}>
        <SearchBar height={this.state.data === mockDataEmpty ? '100%' : '10%'} searchFunction={this.searchFunction}/>
        <div className="row" style={{padding: '0px 30px'}}>
          <div className="col-8">
            {data.map(d => <ApkTemplate key={d} data={d}/>)}
          </div>
          <div className="col-4">
            {data !== mockDataEmpty ?
              <ApiTemplate/>
            : null}
          </div>
        </div>
      </div>
    );
  }
}
