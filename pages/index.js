import React from 'react';
import Page from '../components/Page';
import Menu from '../components/Menu';

export default () => {
  const menus = [
    { path: '/images', title: 'images,' },
    { path: '/texts', title: 'texts,' },
    { path: '/more', title: 'more' },
  ];
  return (
    <Page showHomeButton={false}>
      <div className="menu">
        <Menu menu={menus} />
      </div>
    </Page>
  );
};
