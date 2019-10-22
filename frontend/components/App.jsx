import React from 'react';
import Header from './Header.jsx';
import CompPage from './CompPage.jsx';
import SearchPage from './SearchPage.jsx';
import StatePage from './StatePage.jsx';
import UploadPage from './UploadPage.jsx';
import { getAllSuggestion } from '../apis';

const SearchPageIdx = 1;
const UploadPageIdx = 2;
const GraphStateIdx = 3;
const CompatibleIdx = 4;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      CurrentPageIdx: 1,
      allSuggestion: []
    }
    this.switchPage = this.switchPage.bind(this);
  }

  componentDidMount() {
    getAllSuggestion().then(res => this.setState({ allSuggestion: res.body }));
  }

  switchPage(pageIdx) {
    this.setState({CurrentPageIdx: pageIdx})
  }

  render() {
    const { allSuggestion, CurrentPageIdx } = this.state;

    return (
      <div>
        <div style={{height: '10vh'}}>
          <Header switchPage={this.switchPage}/>
        </div>
        <div style={{height: '90vh'}}>
          {CurrentPageIdx === SearchPageIdx ?
            <SearchPage allSuggestion={allSuggestion}/>
          : null
          }
          {CurrentPageIdx === UploadPageIdx ?
            <UploadPage/>
          : null
          }
          {CurrentPageIdx === GraphStateIdx ?
            <StatePage/>
          : null
          }
          {CurrentPageIdx === CompatibleIdx ?
            <CompPage/>
          : null
          }
        </div>
      </div>
    )
  }
};
