import React from 'react';

import SearchBar from './SearchBar.jsx';
import ApiTemplate from './ApiTemplate.jsx';
import ApkTemplate from './ApkTemplate.jsx';
import PermissionTemplate from './PermissionTemplate.jsx';

import { getSearchByApiName } from '../apis'

export default class SearchPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchBarHeight: '100%',
      type: null,
      detail: null,
      pageIdx: 0,
      hasNext: false,
      currentText: ""
    }
    this.searchFunction = this.searchFunction.bind(this);
    this.showMore = this.showMore.bind(this);
  }

  async showMore() {
    let nextPageIdx = this.state.pageIdx + 1;
    const { apks, hasNext } = await getSearchByApiName(this.state.currentText, nextPageIdx);
    let nextApks = this.state.data.concat(apks);
    this.setState({ data: nextApks, pageIdx: nextPageIdx, hasNext})
  }

  async searchFunction(text, pageIdx = 0) {
    console.log(text);
    //this.state.data === mockData ? this.setState({data: mockDataEmpty}) : this.setState({data: mockData});
    //this.state.searchBarHeight === '100%' ? this.setState({searchBarHeight: '10%'}) : this.setState({searchBarHeight: '100%'});
    const { detail, type, apks, hasNext } = await getSearchByApiName(text, pageIdx);
    console.log(detail)
    console.log(apks)
    this.setState({ detail, type, data: apks, hasNext, currentText: text })
  }

  render() {
    const { data, detail, type, hasNext } = this.state;
    console.log(data.length)

    return (
      <div style={{height: '100%'}}>
        <SearchBar height={data.length === 0 ? '100%' : '10%'} searchFunction={this.searchFunction}/>
        <div className="row" style={{padding: '0px 30px'}}>
          <div className="col-8">
            {data.map((d, idx) => {
                return (
                  <ApkTemplate key={idx} data={d}/>
                );
              })
            }
            { hasNext ?
              <button onClick={this.showMore}>Show more</button>
            : null
            }
          </div>
          <div className="col-4">
            {detail && type == "API" ?
              <ApiTemplate data={detail}/>
            : <PermissionTemplate data={detail}/>}
          </div>
        </div>
      </div>
    );
  }
}
