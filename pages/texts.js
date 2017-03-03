import React, { Component } from 'react';
import Page from '../components/Page';

export default () => {
  const texts = [
    'What is creativity?',
    'Should we think before paint?',
    'Axioms of life',
  ];
  return (
    <Page title="Texts">
      { texts.map(t => <p>{t}</p>)}
    </Page>
  );
};
