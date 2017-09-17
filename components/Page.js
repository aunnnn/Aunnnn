import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

import Container from './Container';
import withAnalytics from './hocs/withAnalytics';

let Page = (props) => (
  <Container htmlTitle={props.htmlTitle}>
    {props.title && <h3><strong>{props.title}</strong></h3>}
    {props.children}
  </Container>
);

Page.propTypes = {
  title: React.PropTypes.string,
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
