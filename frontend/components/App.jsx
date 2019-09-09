import React from 'react';
import Header from './Header.jsx';
import SearchPage from './SearchPage.jsx';
import UploadPage from './UploadPage.jsx';

const SearchPageIdx = 1;
const UploadPageIdx = 2;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPageIdx: 1
    }
    this.switchPage = this.switchPage.bind(this);
  }

  switchPage(pageIdx) {
    this.setState({CurrentPageIdx: pageIdx})
  }

  render() {
    const { CurrentPageIdx } = this.state;

    return (
      <div>
        <div style={{height: '10vh'}}>
          <Header switchPage={this.switchPage}/>
        </div>
        <div style={{height: '90vh'}}>
          {CurrentPageIdx === SearchPageIdx ?
            <SearchPage/>
          : <UploadPage/>
          }
        </div>
      </div>
    )
  }
};
