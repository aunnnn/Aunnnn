import React, { Component } from 'react';
import {Link} from '../routes';
import 'isomorphic-fetch';
import _ from 'lodash';
import shortid from 'shortid';
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

    const posts = this.props.posts;

    return (
      <Page title="Texts" htmlTitle="Texts">
        <ul>
          {
            _.sortBy(posts, 'created_at').reverse().map(t => (
              <li key={shortid.generate()}>
                <Link route="texts" params={{ slug: t.slug }}>
                  {t.title}
                </Link>
              </li>
            ))
          }
        </ul>
        <style>{`
          ul {
            margin: 30px 0;
            list-style: none;
          }

          a {
            text-decoration: none;
            color: #404040;
            display: block;
            padding: 8px 0;
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
