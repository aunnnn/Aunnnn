import React, { Component } from 'react';
import PropTypes from 'prop-types';
import fetch from 'isomorphic-fetch';
import moment from 'moment';
import _ from 'lodash';

import { Link } from '../routes';
import Page from '../components/Page';
import c from '../constants';


class Texts extends Component {
  static async getInitialProps() {
    const res = await fetch(`${c.API_BASE_URL}/api/Posts?filter=${JSON.stringify({
      fields: {
        created_at: true,
        title: true,
        slug: true,
      },
      order: 'created_at DESC',
    })}`);
    const json = await res.json();
    return { posts: json };
  }

  render() {
    const postMapper = t => (
      <li key={t.slug}>
        <Link route="texts" params={{ slug: t.slug }}>
          <a>
            {t.title}
          </a>
        </Link>
      </li>
    );

    const groupMapper = (group, day) => (
      <div key={`${day}`} style={{ marginBottom: '10px' }}>
        <p style={{ fontSize: 10, color: '#BCC1C2', margin: 0 }}>
          {`${moment(day).format('ll')}`}
        </p>
        <ul>
          {group.map(postMapper)}
        </ul>
      </div>
    );

    const groups = _.groupBy(this.props.posts, obj => moment(obj.created_at).startOf('day').format())
    return (
      <Page title="Texts" htmlTitle="Texts">
        <div style={{ paddingTop: '18px' }}>
          { _.map(groups, groupMapper) }
        </div>
        <style>{`
          ul {
            margin: 2px 0 0 0;
            list-style: none;
          }

          a {
            text-decoration: none;
            color: #404040;
            display: block;
            padding: 0 0 8px 0;
          }
        `}</style>
      </Page>
    );
  }
}

Texts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    created_at: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
  })).isRequired,
};

export default Texts;
