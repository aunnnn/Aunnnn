import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

import Head from '../components/DefaultHead';
// import PostEditor from '../components/PostEditor';
import Logo from '../components/Logo';
import c from '../constants';

import dynamic from 'next/dynamic'

const PostEditor = dynamic(import('../components/PostEditor'), {
  ssr: false
});

function checkStatus(res) {
  if (res.error) {
    const err = res.error;
    const error = new Error(err.message);
    error.response = res;
    throw error;
  }
  return res;
}

export default class newPost extends Component {

  handleSubmitNewPost = (postEditorState) => {
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

    if (!confirm('Add new post?')) { return; }

    fetch(`${c.API_BASE_URL}/api/Posts?access_token=${token}`, {
      method: 'POST',
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
        alert('The new post is added!');
        this.props.url.push('/texts');
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
          <h3><strong>New Post</strong></h3>
          <PostEditor
            postTitle=""
            postContent=""
            postSlug=""
            postCreatedAt=""
            handlePostSubmit={this.handleSubmitNewPost}
            formButtonTitle="ADD NEW POST"
          />
        </div>
      </div>
    );
  }
}
