import React from 'react';
import Page from '../components/Page';
import { Link } from '../routes';

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
  'Talk', // 11
  'ML', //12
];

const categoriesToIndicesDict = {};
categories.forEach((el, ind) => {
  categoriesToIndicesDict[el] = ind;
});

const projectsInfo = [
  {
    title: 'MovingNumbersView',
    categories: [1, 4],
    keyword: 'MovingNumbersView',
    subtitle: 'A label with moving numbers effect like the Robinhood iOS app in SwiftUI',
    url: 'https://github.com/aunnnn/MovingNumbersView',
  },
  {
    title: 'RHLinePlot',
    categories: [1, 4],
    keyword: 'RHLinePlot',
    subtitle: 'A line plot like in the Robinhood iOS app in SwiftUI',
    url: 'https://github.com/aunnnn/RHLinePlot',
  },
  {
    title: '*A Corner-based Saliency Model',
    categories: [6, 7],
    keyword: 'CORS',
    subtitle: 'Visual saliency prediction (undergrad thesis)',
  },
  {
    title: 'App Store Interactive Transition Revealed',
    categories: [1, 6, 11],
    keyword: 'AppStore',
    subtitle: 'Seamless interaction like Apple',
  },
  {
    title: 'Visualize NLP classifier',
    categories: [12, 7],
    keyword: 'CSE256',
    subtitle: 'Final group project for CSE256',
  },
  {
    title: 'Platonos',
    categories: [0, 9],
    keyword: 'Platonos',
    subtitle: 'Social network platform that encourages discussions',
  },
  {
    title: 'AutoSketch',
    categories: [1, 6],
    keyword: 'AutoSketch',
    subtitle: 'Visual documentation for iOS',
    url: 'https://blog.oozou.com/documenting-ios-apps-visually-e8736b431cf7',
  },
  {
    title: 'ViewElements',
    categories: [1, 4, 5],
    keyword: 'ViewElements',
    subtitle: 'Simplified views management',
  },
  {
    title: 'CreativeSwift',
    categories: [1, 4, 5],
    keyword: 'CreativeSwift',
    subtitle: 'Creative coding framework in Swift',
  },
  {
    title: 'Swifty Localization',
    categories: [1, 4],
    keyword: 'SwiftyLocalization',
    subtitle: 'Better localization workflow for mobile development'
  },
  {
    title: 'Quick Thai News',
    categories: [0, 1, 8],
    keyword: 'QuickThaiNews',
    subtitle: 'Minimal news reader iOS app',
  },
  {
    title: 'EmojiFaces',
    categories: [9],
    keyword: 'EmojiFaces',
    subtitle: 'Turn faces into Emojis',
  },
  {
    title: 'Shills.lol',
    categories: [9],
    keyword: null,
    subtitle: 'The place to shill cryptocurrencies',
    url: 'https://shills.lol',
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

class ProjectsPage extends React.Component {

  static async getInitialProps({ query }) {
    return {
      tag: query.tag,
    }
  }
  render() {
    const tag = this.props.tag;
    const hasTag = typeof tag !== 'undefined'
    const filteredProjects = hasTag ? projectsInfo.filter(({ categories: cats }) => cats.indexOf(categoriesToIndicesDict[tag]) !== -1) : projectsInfo;
    return (
      <Page title={hasTag ? `Projects - ${tag}` : 'Projects'} htmlTitle="Projects">
        <div className="main">
          {
            hasTag ?
              <Link prefetch href="/projects">
                <a className="back-button">
                  Back to all projects
                </a>
              </Link>
              :
              null
          }
          <ul>
            {
              filteredProjects.map((o) => {
                // Use url if possible
                return (
                  <li key={o.title}>
                    <div className="project-info">
                      {
                        (typeof o.url !== 'undefined') ?
                          (
                            <Link href={o.url}>
                              <a>{o.title}</a>
                            </Link>
                          )
                          :
                          (
                            <Link route="projects" params={{ projectKeyword: o.keyword }}>
                              <a>{o.title}</a>
                            </Link>
                          )
                      }
                      <p className="subtitle">{o.subtitle}</p>
                      <p className="category-list">
                        {
                          o.categories.map(c => (
                            <Link key={`${o.title}-${c}`} route="categories" params={{ tag: categories[c] }}>
                              <span className="tag">
                                {categories[c]}
                              </span>
                            </Link>
                          )
                          )
                        }
                      </p>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <style jsx>{`

          ul {
            margin: 2px 0 0 0;
            list-style: none;
          }
  
          .project-info * {
            display: block;
            font-family: "HelveticaNeue-Light", Helvetica;
          }
  
          .project-info .subtitle, .category-list {
            margin: 0 0 0 20px;
          }

          .project-info a {
            color: #404040;
            padding: 0;
            font-size: 1.2em;
          }
  
          .subtitle {
            font-size: 1em;
            color: gray;
          }
  
          .category-list {
            font-size: 0.7em;
          }
  
          .main {
            margin-bottom: 40px;
          }
          
          .tag {
            color: silver;
            margin: 0 4px;
            cursor: pointer;
          }

          .tag:hover {
            color: gray;
          }

          .main .back-button {
            text-decoration: none;
            font-size: 14px;
            color: silver !important;
            margin-bottom: 22px;
            display: block;
          }

          .main .back-button:hover {
            color: blue !important;
          }
  
          @media (min-width: 801px) {
            .project-info * {
              display: inline-block;
            }
          }
        `}
        </style>
      </Page>
    );
  }
}

export default ProjectsPage;
