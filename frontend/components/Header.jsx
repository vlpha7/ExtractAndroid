import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const SearchPageIdx = 1;
const UploadPageIdx = 2;

export default class Header extends React.Component {
  render() {
    const { switchPage } = this.props;

    return (
      <div>
        <Navbar style={{backgroundColor: '#00B900'}} variant="dark">
          <Navbar.Brand href="#home" onClick={() => switchPage(SearchPageIdx)}>Extract Android</Navbar.Brand>
          <Nav className="mr-auto">
          <Nav.Link href="#home" onClick={() => switchPage(SearchPageIdx)}>Home</Nav.Link>
          <Nav.Link href="#upload" onClick={() => switchPage(UploadPageIdx)}>Upload</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}