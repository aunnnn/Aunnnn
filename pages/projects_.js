import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import ProjectBasePage from '../components/ProjectBasePage';
import ErrorPage from 'next/error';

const ProjectComponents = {
  studiolive: dynamic(import('../projects/StudioLive.js')),
  quickthainews: dynamic(import('../projects/QuickThaiNews.js')),
  cors: dynamic(import('../projects/CORS.js')),
  creativeswift: dynamic(import('../projects/CreativeSwift.js')),
  diamonddashbot: dynamic(import('../projects/DiamondDashBot.js')),
  spaceboxer: dynamic(import('../projects/SpaceBoxer.js')),
  viewelements: dynamic(import('../projects/ViewElements.js')),
  hoverexplorer: dynamic(import('../projects/HoverExplorer.js')),
  platonos: dynamic(import('../projects/Platonos.js')),
  emojifaces: dynamic(import('../projects/EmojiFaces.js')),
  appstore: dynamic(import('../projects/AppStore')),
  swiftylocalization: dynamic(import('../projects/SwiftyLocalization')),
};

const URLRedirects = {
  autosketch: 'https://blog.oozou.com/documenting-ios-apps-visually-e8736b431cf7',
  shills: 'https://shills.lol',
};

class ProjectPage extends Component {
  static async getInitialProps({ query, res }) {
    const projectKeyword = query.projectKeyword.toLowerCase();    
    if (projectKeyword in URLRedirects) {
      res.writeHead(301, {
        Location: URLRedirects[projectKeyword],
      });
      res.end();
      res.finished = true;
      return {};
    }
    return { projectKeyword };
  }

  render() {
    if (!(this.props.projectKeyword in ProjectComponents)) {
      return <ErrorPage statusCode={404} />;
    }
    const ProjectContent = ProjectComponents[this.props.projectKeyword];
    return (
      <ProjectBasePage htmlTitle="Aunnnn">
        <ProjectContent />
      </ProjectBasePage>
    );
  }
}

export default ProjectPage;
