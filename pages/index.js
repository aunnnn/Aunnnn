import React from 'react';
import Page from '../components/Page';
import Menu from '../components/Menu';
import SeekingJob from '../components/SeekingJobSection';

export default () => {
  const menus = [
    { path: '/images', title: 'images,' },
    { path: '/texts', title: 'texts,' },
    { path: '/projects', title: 'projects,' },
    { path: '/more', title: 'more' },
  ];
  return (
    <Page showHomeButton={false}>
      {/* <div className="job-section">
        <SeekingJob resumeText="Seeking full-time software engineer position" />
      </div> */}
      <div className="menu">
        <Menu menu={menus} />        
      </div>
      <style jsx>{`
        .job-section {
          margin: 0;
          padding-top: 0;
          padding-bottom: 18px;
        }
      `}</style>
    </Page>
  );
};
