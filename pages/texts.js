import React, { Component } from 'react';
import Link from 'next/link';
import 'isomorphic-fetch';
import shortid from 'shortid';
import Page from '../components/Page';

class Texts extends Component {
  static async getInitialProps() {
    const res = await fetch('http://localhost:3001/api/Posts');
    const json = await res.json();
    return { posts: json };
  }

  render() {
    // const texts = [
    //   'What is creativity?',
    //   'Should we think before paint?',
    //   'Axioms of life',
    // ];

    const texts = this.props.posts;

    return (
      <Page title="Texts">
        <ul>
          {
            texts.map(t => (
              <li key={shortid.generate()}>
                <Link prefetch href="/">
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
            padding: 4px 0;
          }
        `}</style>
      </Page>
    );
  }
}

export default Texts;
