import React from 'react';
import commonStyles from '../styles/common';
import Autosuggest from 'react-autosuggest';
import { getAllSuggestion } from '../apis';

const getSuggestionValue = suggestion => suggestion;

function getSuggestions(allName, filter) {
  const limit = 5;
  const res = [];
  for (var j = 0; j < allName.length; j++) {
    if (res.length >= limit) break;
    if (filter.length > allName[j].length) continue;
    var isPrefix = true;
    for (var i = 0; i < filter.length; i++) {
      if (filter[i] !== allName[j][i]) isPrefix = false;
    }
    if (isPrefix) res.push(allName[j]);
  }
  return res;
}

const renderSuggestion = suggestion => (
  <span>
    {suggestion}
  </span>
);

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      allSuggestion: [],
      suggestions: []
    };
    this.createNewKeyword = this.createNewKeyword.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  componentDidMount() {
    getAllSuggestion().then(res => this.setState({ allSuggestion: res.body }));
  }

  createNewKeyword() {
    const { searchFunction } = this.props;
    searchFunction(this.state.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.createNewKeyword();
  }

  onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
      suggestions: getSuggestions(this.state.allSuggestion, value)
    });
  };

  onSuggestionsClearRequested = () => {
    this.setState({
      suggestions: []
    });
  };

  onChange = (event, { newValue, method }) => {
    this.setState({
      value: newValue
    });
  };

  render() {
    const { value, suggestions } = this.state;
    const { name, height, placeholder } = this.props;
    const inputProps = {
      placeholder: 'Type api name or permission name',
      value: value,
      onChange: this.onChange
    };

    return (
      <div style={
        Object.assign(
          {},
          commonStyles.center_row_container,
          {height, transition: 'height 0.5s ease 0s', padding: '0px 30px'}
        )}
        className="row"
      >
        <div className="col-8" style={commonStyles.right_row_container}>
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
            onSuggestionsClearRequested={this.onSuggestionsClearRequested}
            getSuggestionValue={getSuggestionValue}
            renderSuggestion={renderSuggestion}
            inputProps={inputProps} />
        </div>
          <div className="col-4"><button className="ButtonBlue" onClick={this.createNewKeyword}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;