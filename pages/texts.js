import React, { Component } from 'react';
import fetch from 'isomorphic-fetch';
import shortid from 'shortid';
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
    // const texts = [
    //   'What is creativity?',
    //   'Should we think before paint?',
    //   'Axioms of life',
    // ];
    const postMapper = t => (
      <li key={shortid.generate()}>
        <Link route="texts" params={{ slug: t.slug }}>
          <a>
            {t.title}
          </a>
        </Link>
      </li>
    );

    const groupMapper = (group, day) => (
      <div>
        <p style={{ fontSize: 10, color: 'grey', margin: 0 }}>
          {`${moment(day).format('ll')}`}
        </p>
        <ul>
          {group.map(postMapper)}
        </ul>
      </div>
    );

    const groups = _.groupBy(this.props.posts, obj => moment(obj.created_at).startOf('day').format());
    return (
      <Page title="Texts" htmlTitle="Texts">
        <div style={{ paddingTop: '18px' }}>
          { _.map(groups, groupMapper) }
        </div>
        <style>{`
          ul {
            margin: 8px 0 0 0;
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
  posts: React.PropTypes.arrayOf(React.PropTypes.shape({
    created_at: React.PropTypes.objectOf(Date).isRequired,
    title: React.PropTypes.string.isRequired,
    slug: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Texts;
