import React, { Component } from 'react';
import 'isomorphic-fetch';
import shortid from 'shortid';
import moment from 'moment';
import _ from 'lodash';
import Page from '../components/Page';
import c from '../constants';
import { Link } from '../routes';

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

  static async getInitialProps() {
    const res = await fetch(`${c.API_BASE_URL}/api/Posts`);
    const json = await res.json();
    return { posts: json };
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      loading: false,
      findingToken: true,
    };

    // data
    this.checkToken = this.checkToken.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);

    // rendering
    this.NonEmptyTable = this.NonEmptyTable.bind(this);
    this.renderValidatedContent = this.renderValidatedContent.bind(this);
    this.PostTableRow = this.PostTableRow.bind(this);
  }

  componentDidMount() {
    setTimeout(() => this.checkToken(), 80);
  }

  // go to home page if no permission
  checkToken() {
    const token = localStorage.getItem('aunnnn-token');
    if (!token) {
      this.setState({ findingToken: false });
      this.props.url.push('/');
      return;
    }
    this.setState({ token, findingToken: false });
  }

  refreshPosts() {
    fetch(`${c.API_BASE_URL}/api/Posts`)
    .then(res => res.json())
    .then(checkStatus)
    .then(posts => this.setState({ posts }))
    .catch(alert);
  }

  NonEmptyTable(posts) {
    return (
      <table className="u-full-width">
        <thead>
          <tr>
            <th>title</th>
            <th>length</th>
            <th>slug</th>
            <th>create at</th>
            <th>manage</th>
          </tr>
        </thead>
        <tbody>
          { _.sortBy(posts, 'created_at').reverse().map(this.PostTableRow) }
        </tbody>
      </table>
    );
  }

  handleDeletePost = (id) => {
    const { token } = this.state;

    if (!token) {
      alert('Oops! No token.');
      return;
    }

    if (!confirm('Delete this post?')) { return; }

    fetch(`${c.API_BASE_URL}/api/Posts/${id}?access_token=${token}`, {
      method: 'DELETE',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
      }),
    })
    .then(res => res.json())
    .then(checkStatus)
    .then(res => {
      alert(`The post is deleted (${res.count}).`);
      this.refreshPosts();
    })
    .catch(alert);
  }

  handleEditPost = (slug) => {
    this.props.url.push(`/editPost/${slug}`);
  }

  PostTableRow(post) {
    return (
      <tr key={shortid.generate()}>
        <td>{post.title}</td>
        <td>{post.content.length}</td>
        <td>{post.slug}</td>
        <td>{moment(post.created_at).fromNow()}</td>
        <td>
          <Link route="editPost" params={{ slug: post.slug }}>
            <button type="button" style={{ color: 'blue', cursor: 'pointer', borderStyle: 'none' }}>edit</button>
          </Link>
          <button type="button" style={{ color: 'red', borderStyle: 'none' }} onClick={() => this.handleDeletePost(post.id)}>delete</button>
        </td>
      </tr>
    );
  }

  renderValidatedContent() {
    const { posts } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h4><strong>Posts</strong></h4>
        { /* table */ }
        <div>
          <div>
            { posts.length === 0 ?
              (
                <div style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                  No posts yet.
                </div>
              )
              :
              this.NonEmptyTable(posts) }
          </div>
        </div>
      </div>
    );
  }

  render() {
    const { token, findingToken } = this.state;
    return (
      <Page title="Admin" htmlTitle="Admin">
        {
          (findingToken && <h5>Loading...</h5>)
          || (!findingToken && !token && <h5>Unauthorized.</h5>)
          || this.renderValidatedContent()
        }
      </Page>
    );
  }
}

export default admin;
