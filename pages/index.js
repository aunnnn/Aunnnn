import React from 'react';
import Page from '../components/Page';
import Menu from '../components/Menu';
import Internship from '../components/SeekingInternshipSection';

export default () => {
  const menus = [
    { path: '/images', title: 'images,' },
    { path: '/texts', title: 'texts,' },
    { path: '/projects', title: 'projects,' },
    { path: '/more', title: 'more' },
  ];
  return (
    <Page showHomeButton={false}>
      <div className="intern-section">
        <Internship />
      </div>
      <div className="menu">
        <Menu menu={menus} />        
      </div>
      <style jsx>{`
        .intern-section {
          margin: 0;
          padding-top: 0;
          padding-bottom: 18px;
        }
      `}</style>
    </Page>
  );
};
