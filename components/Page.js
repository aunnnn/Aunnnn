import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import Container from './Container';
import withAnalytics from './hocs/withAnalytics';

let Page = ({ title, htmlTitle, showHomeButton = true, children }) => (
  <Container htmlTitle={htmlTitle}>
    <div>
      {showHomeButton && (
        <Link prefetch href="/">
          <a className="back-button">
            <img src="/static/assets/chevron-left.svg" alt="Home" />
            <p>Home</p>
          </a>
        </Link>
      )}
      {title && <h3><strong>{title}</strong></h3>}
      <style jsx>{`
        .back-button {
          text-decoration: none;
          font-size: 15px;
          color: black;
        }
        .back-button p {
          display: inline;
          margin-left: 4px;
          height: 100%;
        }
      `}</style>
    </div>
    {children}
  </Container>
);

Page.propTypes = {
  title: PropTypes.string,
  showHomeButton: PropTypes.bool,
  htmlTitle: PropTypes.string,
};

Page.defaultProps = {
  title: null,
};

let PageWithUpperComponent = (props) => (
  <Container htmlTitle={props.htmlTitle}>
    {props.upperComponent}
    {props.title && <h3><strong>{props.title}</strong></h3>}
    {props.children}
    <style jsx>{`
      a {
        color: #303030;
        text-decoration: none;
      }
    `}</style>
  </Container>
);

Page = withAnalytics(Page);
PageWithUpperComponent = withAnalytics(PageWithUpperComponent);

export default Page;
export { PageWithUpperComponent };
