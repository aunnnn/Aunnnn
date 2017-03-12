import React, { Component } from 'react';
import 'isomorphic-fetch';
import shortid from 'shortid';
import moment from 'moment';
import _ from 'lodash';
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

  static async getInitialProps() {
    const res = await fetch('http://localhost:3001/api/Posts');
    const json = await res.json();
    return { posts: json };
  }

  constructor(props) {
    super(props);
    this.state = {
      posts: props.posts,
      loading: false,
      findingToken: true,
      newPostTitle: '',
      newPostContent: '',
      newPostSlug: '',
    };

    // data
    this.checkToken = this.checkToken.bind(this);
    this.refreshPosts = this.refreshPosts.bind(this);

    // rendering
    this.NonEmptyTable = this.NonEmptyTable.bind(this);
    this.renderValidatedContent = this.renderValidatedContent.bind(this);
    this.PostTableRow = this.PostTableRow.bind(this);

    // form handling
    this.handleAddNewPost = this.handleAddNewPost.bind(this);
    this.handleNewPostFormChange = this.handleNewPostFormChange.bind(this);
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
    fetch('http://localhost:3001/api/Posts')
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

  handleAddNewPost(event) {
    event.preventDefault();

    const { loading, token } = this.state;
    if (loading) { return; }
    if (!token) {
      alert('Oops! No token.');
      return;
    }

    if (!confirm('Add new post?')) { return; }

    this.setState({ loading: true });

    const { newPostTitle, newPostContent, newPostSlug } = this.state;
    fetch(`http://localhost:3001/api/Posts?access_token=${token}`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        created_at: Date(),
        title: newPostTitle,
        content: newPostContent,
        slug: newPostSlug,
      }),
    })
    .then(res => res.json())
    .then(checkStatus)
    .then(res => {
      alert('The new post is added!');
      this.setState({
        newPostTitle: '',
        newPostContent: '',
        newPostSlug: '',
      });
      this.refreshPosts();
    })
    .catch(alert)
    .then(() => {
      this.setState({ loading: false });
    });
  }

  handleNewPostFormChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDeletePost = (id) => {
    const { token } = this.state;

    if (!token) {
      alert('Oops! No token.');
      return;
    }

    if (!confirm('Delete this post?')) { return; }

    fetch(`http://localhost:3001/api/Posts/${id}?access_token=${token}`, {
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

  PostTableRow(post) {
    return (
      <tr key={shortid.generate()}>
        <td>{post.title}</td>
        <td>{post.content.length}</td>
        <td>{post.slug}</td>
        <td>{moment(post.created_at).fromNow()}</td>
        <td><button type="button" style={{ color: 'red', borderStyle: 'none' }} onClick={() => this.handleDeletePost(post.id)}>delete</button></td>
      </tr>
    );
  }

  renderValidatedContent() {
    const { posts, newPostTitle, newPostContent, newPostSlug } = this.state;

    return (
      <div style={{ padding: '20px' }}>
        <h4><strong>Posts</strong> (Texts)</h4>

        {/* NEW POST FORM*/}
        <form
          onSubmit={this.handleAddNewPost}
          style={{
            padding: '20px',
            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'grey',
          }}
        >
          <h4>New Post</h4>
          <div className="row">
            <label className="two columns" htmlFor="newPostTitle">Title</label>
            <input
              className="ten columns"
              type="string"
              id="newPostTitle"
              value={this.state.newPostTitle}
              onChange={this.handleNewPostFormChange}
            />
          </div>

          <div className="row">
            <label className="two columns" htmlFor="newPostContent">Content</label>
            <textarea
              className="ten columns"
              id="newPostContent"
              value={this.state.newPostContent}
              onChange={this.handleNewPostFormChange}
            />
          </div>

          <div className="row">
            <label className="two columns" htmlFor="newPostSlug">Slug</label>
            <input
              className="ten columns"
              type="string"
              id="newPostSlug"
              value={this.state.newPostSlug}
              onChange={this.handleNewPostFormChange}
            />
          </div>

          <input
            value="Save"
            type="submit"
            disabled={newPostTitle === '' || newPostContent === '' || newPostSlug === ''}
            className="button-primary"
          />
        </form>

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
      <Page title="Admin">
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
