import React from 'react';
import commonStyles from '../styles/common';
import Autosuggest from 'react-autosuggest';

const getSuggestionValue = suggestion => suggestion;

function getSuggestions(allName, filter) {
  const limit = 5;
  const res = [];
  const testCase = new RegExp(`${filter.toLowerCase()}`);
  for (var j = 0; j < allName.length; j++) {
    if (res.length >= limit) break;
    if (filter.length > allName[j].length) continue;
    if (testCase.test(allName[j])) res.push(allName[j]);
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
      suggestions: [],
      timeoutId: null
    };
    this.createNewKeyword = this.createNewKeyword.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
  }

  createNewKeyword() {
    const { searchFunction } = this.props;
    searchFunction(this.state.value);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.createNewKeyword();
  }

  onSuggestionsFetchRequested = ({ value }) => {
    const { timeoutId } = this.state;
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    const newId = setTimeout(() => {
      this.setState({
        suggestions: getSuggestions(this.props.allSuggestion, value)
      });
    }, 500);
    this.setState({ timeoutId: newId });
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