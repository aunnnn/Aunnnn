import React from 'react';
import Page from '../components/Page';
import { Link } from '../routes';

const ProjectsPage = () => {
  const categories = [
    'HCI', // 0
    'iOS', // 1
    'Java', // 2
    'Game', // 3
    'Swift', // 4
    'Framework', // 5
    'Research', // 6
    'Python', // 7
  ];

  const projectsInfo = [
    {
      title: 'Hover Explorer',
      categories: [0, 2],
      keyword: 'HoverExplorer',
    },
    {
      title: 'The Space Boxer',
      categories: [2, 3],
      keyword: 'SpaceBoxer',
    },
    {
      title: 'Diamond Dash Bot',
      categories: [2],
      keyword: 'DiamondDashBot',
    },
    {
      title: 'Quick Thai News',
      categories: [0, 1],
      keyword: 'QuickThaiNews',
    },
    {
      title: 'Studio Live',
      categories: [0, 1],
      keyword: 'StudioLive',
    },
    {
      title: 'CreativeSwift',
      categories: [4, 5],
      keyword: 'CreativeSwift',
    },
    {
      title: 'ViewElements',
      categories: [1, 4, 5],
      keyword: 'ViewElements',
    },
    {
      title: 'A Corner-based Saliency Model',
      categories: [6, 7],
      keyword: 'CORS',
    },
  ];
  return (
    <Page title="Projects" htmlTitle="Projects">
      <div className="main">
        <ul>
          {
            projectsInfo.map(o => (
              <li key={o.title}>
                <Link route="projects" params={{ projectKeyword: o.keyword }}>
                  <a>{o.title}</a>
                </Link>
                <p className="category-list">
                  {o.categories.map(c => categories[c]).join(', ')}
                </p>
              </li>
            ))
          }
        </ul>
      </div>
      <style>{`
        ul {
          margin: 2px 0 0 0;
          list-style: none;
        }

        .main a {
          text-decoration: none;
          color: #404040;
          padding: 0 0 8px 0;
          display: block;
          padding: 0;
        }

        .category-list {
          font-size: 14px;
          color: gray;
        }

        .main {
          margin-left: 20px;
        }
      `}</style>
    </Page>
  );
};

export default ProjectsPage;
