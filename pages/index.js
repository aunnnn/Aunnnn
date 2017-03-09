import React from 'react';
import Page from '../components/Page';
import Menu from '../components/Menu';

export default () => {
  const menus = [
    { path: '/images', title: 'images,' },
    { path: '/texts', title: 'texts' },
  ];
  return (
    <Page>
      <div className="menu">
        <Menu menu={menus} />
      </div>
      <style>{`
        .menu {

        }
      `}</style>
    </Page>
  );
};
