import React from 'react';
import Head from 'next/head';

export default ({ title = 'Aunnnn' }) => (
  <Head>
    <title>{title}</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel="stylesheet" type="text/css" href="/static/css/normalize.css" />
    <link rel="stylesheet" type="text/css" href="/static/css/skeleton.css" />
  </Head>
);
