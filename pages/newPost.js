import React, { Component } from 'react';
import TinyMCE from 'react-tinymce-input';
import fetch from 'isomorphic-fetch';
import moment from 'moment';

import Head from '../components/DefaultHead';
import Logo from '../components/Logo';
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

export default class newPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      newPostContent: '',
      newPostTitle: '',
      newPostSlug: '',
      newPostCreatedAt: moment().format('DD-MM-YYYY HH:mm'),
    };
  }

  handleEditorChange = (value) => {
    this.setState({
      newPostContent: value,
    });
  }

  handleNewPostFormChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleAddNewPost = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('aunnnn-token');
    if (!token) {
      alert('Oops! No token.');
      return;
    }

    const { newPostTitle, newPostContent, newPostSlug, newPostCreatedAt } = this.state;

    // strict date parsing
    const finalCreatedAt = moment(newPostCreatedAt, 'DD-MM-YYYY HH:mm', true);
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
        created_at: Date(),
        title: newPostTitle,
        content: newPostContent,
        slug: newPostSlug,
      }),
    })
    .then(res => res.json())
    .then(checkStatus)
    .then((res) => {
      alert('The new post is added!');
      this.setState({
        newPostTitle: '',
        newPostContent: '',
        newPostSlug: '',
        newPostCreatedAt: '',
      });

      this.props.url.push('/newPost');
    })
    .catch(alert);
  }

  render() {
    const { newPostTitle, newPostSlug, newPostContent, newPostCreatedAt } = this.state;
    return (
      <div>
        <Head>
          <script src="//cloud.tinymce.com/stable/tinymce.min.js?apiKey=m4f1a3jswpuzpbxgi6ysh1lghxt2ek0son1fuj5eq5z7bdzj" />
        </Head>
        <div className="container">
          <Logo />
          <h3><strong>New Post</strong></h3>
          <div>
            <div>
              <TinyMCE
                value={newPostContent}
                tinymceConfig={{
                  plugins: 'autolink link image lists code hr preview',
                  toolbar: 'undo redo | bold italic | fontselect fontsizeselect | alignleft aligncenter alignright | bullist numlist blockquote  code hr | preview',
                  font_formats: "Helvetica Neue='Helvetica Neue';Arial=arial,helvetica,sans-serif",
                }}
                onChange={this.handleEditorChange}
                onSetupEditor={(editor) => {
                  editor.on('init', function () {
                    this.getDoc().body.style.fontSize = '12';
                    this.getDoc().body.style.fontFamily = 'Helvetica Neue';
                  });
                }}
              />
            </div>
            <br />
            <form onSubmit={this.handleAddNewPost}>
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
                <label className="two columns" htmlFor="newPostSlug">Slug</label>
                <input
                  className="ten columns"
                  type="string"
                  id="newPostSlug"
                  value={this.state.newPostSlug}
                  onChange={this.handleNewPostFormChange}
                />
              </div>
              <div className="row">
                <label className="two columns" htmlFor="newPostCreatedAt">Created date</label>
                <input
                  className="ten columns"
                  type="string"
                  id="newPostCreatedAt"
                  value={this.state.newPostCreatedAt}
                  onChange={this.handleNewPostFormChange}
                />
              </div>
              <br />

              <input
                value="Add Post"
                type="submit"
                disabled={newPostTitle === '' || newPostContent === '' || newPostSlug === '' || newPostCreatedAt === ''}
                className="button-primary"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
