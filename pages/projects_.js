import React, { Component } from 'react';
import dynamic from 'next/dynamic';
import ProjectBasePage from '../components/ProjectBasePage';

const ProjectComponents = {
  StudioLive: dynamic(import('../projects/StudioLive.js')),
  QuickThaiNews: dynamic(import('../projects/QuickThaiNews.js')),
  CORS: dynamic(import('../projects/CORS.js')),
  CreativeSwift: dynamic(import('../projects/CreativeSwift.js')),
  DiamondDashBot: dynamic(import('../projects/DiamondDashBot.js')),
  SpaceBoxer: dynamic(import('../projects/SpaceBoxer.js')),
  ViewElements: dynamic(import('../projects/ViewElements.js')),
  HoverExplorer: dynamic(import('../projects/HoverExplorer.js')),
  Platonos: dynamic(import('../projects/Platonos.js')),
  EmojiFaces: dynamic(import('../projects/EmojiFaces.js')),
  AppStore: dynamic(import('../projects/AppStore')),
};

class ProjectPage extends Component {
  static async getInitialProps({ query }) {
    const { projectKeyword } = query;
    return { projectKeyword };
  }

  render() {
    const ProjectContent = ProjectComponents[this.props.projectKeyword];
    return (
      <ProjectBasePage htmlTitle="Aunnnn">
        <ProjectContent />
      </ProjectBasePage>
    );
  }
}

export default ProjectPage;
