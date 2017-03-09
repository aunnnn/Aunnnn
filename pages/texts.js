import React, { Component } from 'react';
import Link from 'next/link';
import shortid from 'shortid';
import Page from '../components/Page';

export default () => {
  const texts = [
    'What is creativity?',
    'Should we think before paint?',
    'Axioms of life',
  ];
  return (
    <Page title="Texts">
      <ul>
        {
          texts.map(t => (
            <li key={shortid.generate()}>
              <Link prefetch href="/">
                {t}
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
          color: grey;
          display: block;
          padding: 4px 0;
        }
      `}</style>
    </Page>
  );
};
