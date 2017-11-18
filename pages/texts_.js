import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import { Link } from '../routes';

import { PageWithUpperComponent } from '../components/Page';
import c from '../constants';

class Text extends Component {
  static async getInitialProps({ query }) {
    const res = await fetch(`${c.API_BASE_URL}/api/Posts/findOne?filter=${JSON.stringify({ where: { slug: query.slug } })}`);
    const json = await res.json();
    return { post: json };
  }

  constructor(props) {
    super(props);
    this.state = {
      isAdmin: false,
    };
  }

  adminEditButton = post => (
    <Link route="editPost" params={{ slug: post.slug }}>
      <a style={{ color: 'blue', cursor: 'pointer', fontSize: 12 }}>edit</a>
    </Link>
  )

  componentDidMount() {
    setTimeout(this.checkAdmin, 100);
  }

  checkAdmin = () => {
    this.setState({
      isAdmin: localStorage.getItem('aunnnn-token'),
    });
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
        { this.state.isAdmin ? this.adminEditButton(post) : '' }
      </PageWithUpperComponent>
    );
  }
}

Text.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired,
  }).isRequired,
};

export default Text;
