import React, { Component } from 'react';
import 'isomorphic-fetch';
import moment from 'moment';
import Page from '../components/Page';

const BASE_URL = 'https://backend.aunnnn.com';

class Text extends Component {
  static async getInitialProps({ query }) {
    const post_slug = query.slug;
    const res = await fetch(`${BASE_URL}/api/Posts/findOne?filter=${JSON.stringify({ slug: post_slug })}`);
    const json = await res.json();
    return { post: json };
  }

  render() {
    const post = this.props.post;
    return (
      <Page title={post.title}>
        <p>{post.content}</p>
        <br />
        <p style={{ fontSize: 14 }}>{moment(post.created_at).format('LL')}</p>
      </Page>
    );
  }
}

export default Text;
