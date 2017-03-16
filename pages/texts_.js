import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import Link from 'next/link';

import { PageWithUpperComponent } from '../components/Page';
import c from '../constants';

class Text extends Component {
  static async getInitialProps({ query }) {
    const res = await fetch(`${c.API_BASE_URL}/api/Posts/findOne?filter=${JSON.stringify({ where: { slug: query.slug } })}`);
    const json = await res.json();
    return { post: json };
  }

  render() {
    const post = this.props.post;
    return (
      <PageWithUpperComponent
        title={post.title}
        htmlTitle={post.title}
        upperComponent={
          <Link prefetch href="/texts">
            <a style={{ fontSize: 12, margin: '0 0 6px 0', color: 'grey' }}>{moment(post.created_at).format('LL')}</a>
          </Link>
        }
      >
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
        <br />
      </PageWithUpperComponent>
    );
  }
}

Text.propTypes = {
  post: React.PropTypes.shape({
    _id: React.PropTypes.number.isRequired,
    slug: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    content: React.PropTypes.string.isRequired,
    created_at: React.PropTypes.instanceOf(Date).isRequired,
  }).isRequired,
};

export default Text;
