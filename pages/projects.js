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
    'Mobile app', // 8
    'Web', // 9
    'Desktop', // 10
  ];

  const projectsInfo = [
    {
      title: '*A Corner-based Saliency Model',
      categories: [6, 7],
      keyword: 'CORS',
      subtitle: 'Visual saliency prediction (undergrad thesis)',
    },
    {
      title: 'Platonos',
      categories: [0, 9],
      keyword: 'Platonos',
      subtitle: 'Social network platform that encourages discussions',
    },
    {
      title: 'EmojiFaces',
      categories: [9],
      keyword: 'EmojiFaces',
      subtitle: 'Turn faces into Emojis',
    },
    {
      title: 'ViewElements',
      categories: [1, 4, 5],
      keyword: 'ViewElements',
      subtitle: 'Simplified views management',
    },
    {
      title: 'CreativeSwift',
      categories: [4, 5],
      keyword: 'CreativeSwift',
      subtitle: 'Creative coding framework in Swift',
    },
    {
      title: 'Quick Thai News',
      categories: [0, 1, 8],
      keyword: 'QuickThaiNews',
      subtitle: 'Minimal news reader iOS app',
    },
    {
      title: 'Studio Live',
      categories: [0, 1, 8],
      keyword: 'StudioLive',
      subtitle: 'Animation creator iOS app',
    },
    {
      title: 'Hover Explorer',
      categories: [0, 2, 10],
      keyword: 'HoverExplorer',
      subtitle: 'Alternative file explorer',
    },
    {
      title: 'The Space Boxer',
      categories: [2, 3, 10],
      keyword: 'SpaceBoxer',
      subtitle: '2D desktop game',
    },
    {
      title: 'Diamond Dash Bot',
      categories: [2, 10],
      keyword: 'DiamondDashBot',
      subtitle: 'Bot that plays Diamond Dash',
    },
  ];
  return (
    <Page title="Projects" htmlTitle="Projects">
      <div className="main">
        <ul>
          {
            projectsInfo.map(o => {
              // Use url if possible
              if (typeof o.url !== "undefined") {
                return (
                  <li key={o.title}>
                    <div className="project-info">
                      <Link href={o.url}>
                        <a>{o.title}</a>
                      </Link>
                      <p className="subtitle">{o.subtitle}</p>
                      <p className="category-list">
                        {o.categories.map(c => categories[c]).join(', ')}
                      </p>
                    </div>
                  </li>
                )
              }
              return (
                <li key={o.title}>
                  <div className="project-info">
                    <Link route="projects" params={{ projectKeyword: o.keyword }}>
                      <a>{o.title}</a>
                    </Link>
                    <p className="subtitle">{o.subtitle}</p>
                    <p className="category-list">
                      {o.categories.map(c => categories[c]).join(', ')}
                    </p>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <style>{`
        ul {
          margin: 2px 0 0 0;
          list-style: none;
        }

        .main a {
          color: #404040;
          padding: 0;
        }

        .project-info * {
          display: block;
          font-family: "HelveticaNeue-Light", Helvetica;
        }

        .project-info .subtitle, .category-list {
          margin: 0 0 0 20px;
        }

        .project-info a {
          font-size: 1.2em;
        }

        .subtitle {
          font-size: 1em;
          color: gray;
        }

        .category-list {
          font-size: 0.6em;
          color: silver;
        }

        .main {
          margin-left: 20px;
        }

        @media (min-width: 801px) {
          .project-info * {
            display: inline-block;
          }
        }
      `}</style>
    </Page>
  );
};

export default ProjectsPage;
