import React from 'react';
import commonStyles from '../styles/common';

const style = {
  height: 35,
  padding: '5px 15px',
  border: 1,
  borderRadius: 8,
  borderColor: '#C4C4C4',
  borderStyle: 'solid',
  width: '80%'
};

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newKeyword: ''
    };
    this.createNewKeyword = this.createNewKeyword.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  createNewKeyword() {
    const { searchFunction } = this.props;
    searchFunction(this.state.newKeyword);
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') this.createNewKeyword();
  }

  render() {
    const { name, height, placeholder } = this.props;

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
          <input
            style={style}
            name={name}
            type="text"
            value={this.state.newKeyword}
            placeholder={placeholder}
            onChange={(e) => this.setState({ newKeyword: e.target.value })}
            onKeyPress={this.handleKeyPress}
          />
        </div>
          <div className="col-4"><button className="ButtonBlue" onClick={this.createNewKeyword}>Search</button>
        </div>
      </div>
    );
  }
}

export default SearchBar;