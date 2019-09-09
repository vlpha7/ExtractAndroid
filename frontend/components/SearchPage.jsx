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
      indexPage: 1,
      searchBarHeight: '100%',
      detail: null
    }
    this.searchFunction = this.searchFunction.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  showMore() {
    const newIndexPage = this.state.indexPage + 1;
    this.setState({ indexPage: newIndexPage });
  }

  searchFunction(text) {
    console.log(text);
    //this.state.data === mockData ? this.setState({data: mockDataEmpty}) : this.setState({data: mockData});
    //this.state.searchBarHeight === '100%' ? this.setState({searchBarHeight: '10%'}) : this.setState({searchBarHeight: '100%'});
    const { detail, apks } = getSearchByApiName(text);
    this.setState({ detail, data: apks })
  }

  render() {
    const { data, indexPage, detail } = this.state;
    console.log(data.length)

    return (
      <div style={{height: '100%'}}>
        <SearchBar height={data.length === 0 ? '100%' : '10%'} searchFunction={this.searchFunction}/>
        <div className="row" style={{padding: '0px 30px'}}>
          <div className="col-8">
            {data.map((d, idx) => {
                if (idx >= indexPage * 5) return null;
                return (
                  <ApkTemplate key={d} data={d}/>
                );
              })
            }
            {data.length > indexPage * 5 ?
              <button onClick={this.showMore}>Show more</button>
            : null
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
