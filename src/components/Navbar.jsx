import React, { Component } from "react";
import { Navbar, Nav, InputGroup, FormControl } from "react-bootstrap";
import { Link, withRouter  } from 'react-router-dom';

class NetflixNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
    };
  }

  searchStringHandler = (e) => {
    if (e.keyCode === 13) {
      // WHEN ENTER KEY IS PRESSED
      this.props.showSearchResult(this.state.searchString);
    } else {
      this.setState({ searchString: e.currentTarget.value });
    }
  };

  render() {
    console.log(this.props)
    return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: "#221f1f" }}>
        <Link to="/">
        <Navbar.Brand href="/">
          <img
            src="assets/logo.png"
            alt="logo"
            style={{ width: "100px", height: "55px" }}
          />
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/"
              className={
                this.props.location.pathname === '/'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              Home
            </Link>
            <Link to="/tvShow"
              className={
                this.props.location.pathname === '/tvShow'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              TV Show
            </Link>
            <Link to="/movies"
              className={
                this.props.location.pathname === '/movies'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              Movies
            </Link>
            <Link to="/recent"
              className={
                this.props.location.pathname === '/recent'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              Recently Added
            </Link>
            <Link to="/myList"
              className={
                this.props.location.pathname === '/myList'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              My List
            </Link>
            <Link to="/register"
              className={
                this.props.location.pathname === '/register'
                  ? "nav-link active"
                  : "nav-link"
              }
              >
              Register
            </Link>
          </Nav>
          <span className="d-none d-md-flex align-items-center">
            <InputGroup className="icons">
              <FormControl
                placeholder="Search and press enter"
                aria-label="search"
                aria-describedby="basic-addon1"
                onKeyDown={this.searchStringHandler}
                onChange={this.searchStringHandler}
                value={this.state.searchString}
              />
            </InputGroup>
            <div id="kids">KIDS</div>
            <i className="fa fa-bell icons"></i>
            <i className="fa fa-user icons"></i>
          </span>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default withRouter(NetflixNavbar);
