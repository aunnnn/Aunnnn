import React, { Component } from 'react';
import Page from '../components/Page';

export default () => {
  const texts = [
    'What is creative?',
    'Should we think before paint?',
    'Axioms of life',
  ];
  return (
    <Page title="Texts">
      { texts.map(t => <a>{t}</a>)}
    </Page>
  );
};
