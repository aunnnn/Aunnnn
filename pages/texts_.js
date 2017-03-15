import React, { Component } from 'react';
import 'isomorphic-fetch';
import moment from 'moment';
import Page from '../components/Page';
import c from '../constants';

class Text extends Component {
  static async getInitialProps({ query }) {
    const post_slug = query.slug;
    const res = await fetch(`${c.API_BASE_URL}/api/Posts/findOne?filter=${JSON.stringify({ where: { slug: post_slug } })}`);
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
