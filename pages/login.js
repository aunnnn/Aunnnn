import React, { Component } from 'react';
import 'isomorphic-fetch';
import Page from '../components/Page';

function checkStatus(res) {
  if (res.error) {
    const err = res.error;
    const error = new Error(err.message);
    error.response = res;
    throw error;
  }
  return res;
}

class admin extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      username: '',
      password: '',
      loading: false,
    };
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {

    event.preventDefault();

    if (this.state.loading) { return; };

    this.setState({
      loading: true,
    });

    const { username, password } = this.state;

    fetch('https://backend.aunnnn.com/api/Users/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
    .then(res => res.json())
    .then(checkStatus)
    .then(res => {
      localStorage.setItem('aunnnn-token', res.id);
      this.props.url.push('/admin');
    })
    .catch(err => {
      alert(err);
      this.setState({
        loading: false,
      });
    });
  }

  render() {
    return (
      <Page title="Manage">
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <label htmlFor="usernameInput">username</label>
            <input
              className="u-full-width"
              type="text"
              onChange={this.handleChange}
              value={this.state.username}
              id="username"
            />
          </div>
          <div className="row">
            <label htmlFor="passwordInput">password</label>
            <input
              className="u-full-width"
              type="password"
              onChange={this.handleChange}
              value={this.state.password}
              id="password"
            />
          </div>
          <div className="row">
            {
              !this.state.loading && (
                <input
                  className="button-primary"
                  type="submit"
                  value="Login"
                  disabled={!this.state.username || !this.state.password}
                />
              )
            }
          </div>
        </form>
      </Page>
    );
  }
}

export default admin;
