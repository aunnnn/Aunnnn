import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

import Head from '../components/DefaultHead';
import Logo from '../components/Logo';
import PostEditor from '../components/PostEditor';

import c from '../constants';

function checkStatus(res) {
  if (res.error) {
    const err = res.error;
    const error = new Error(err.message);
    error.response = res;
    throw error;
  }
  return res;
}

class EditPost extends Component {
  static async getInitialProps({ query }) {
    const res = await fetch(`${c.API_BASE_URL}/api/Posts/findOne?filter=${JSON.stringify({ where: { slug: query.slug } })}`);
    const json = await res.json();
    return { post: json };
  }

  handleSubmitEditPost = (postEditorState) => {
    const token = localStorage.getItem('aunnnn-token');
    if (!token) {
      alert('Oops! No token.');
      return;
    }

    const { postTitle, postContent, postSlug, postCreatedAt } = postEditorState;

    // strict date parsing
    const finalCreatedAt = moment(postCreatedAt, 'DD-MM-YYYY HH:mm', true);
    if (!finalCreatedAt.isValid()) {
      alert('Oops! Date should be in format: DD-MM–YYYY HH:mm');
      return;
    }

    if (!confirm('Edit post?')) { return; }

    fetch(`${c.API_BASE_URL}/api/Posts/${this.props.post.id}?access_token=${token}`, {
      method: 'PUT',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        created_at: finalCreatedAt,
        title: postTitle,
        content: postContent,
        slug: postSlug,
      }),
    })
    .then(res => res.json())
    .then(checkStatus)
    .then((res) => {
      alert('The post is edited!');
      this.props.url.push('/admin');
    })
    .catch(alert);
  }

  render() {
    return (
      <div>
        <Head>
          <script src="//cloud.tinymce.com/stable/tinymce.min.js?apiKey=m4f1a3jswpuzpbxgi6ysh1lghxt2ek0son1fuj5eq5z7bdzj" />
        </Head>
        <div className="container">
          <Logo />
          <h3><strong>Edit Post: {this.props.post.title}</strong></h3>
          <PostEditor
            postTitle={this.props.post.title}
            postContent={this.props.post.content}
            postSlug={this.props.post.slug}
            postCreatedAt={this.props.post.created_at}
            handlePostSubmit={this.handleSubmitEditPost}
            formButtonTitle="EDIT POST"
          />
        </div>
      </div>
    );
  }
}

EditPost.propTypes = {
  post: React.PropTypes.shape({
    id: React.PropTypes.string.isRequired,
    slug: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    created_at: React.PropTypes.string.isRequired,
  }).isRequired,
};

export default EditPost;
