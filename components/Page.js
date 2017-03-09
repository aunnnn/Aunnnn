import React from 'react';
import Container from './Container';

const Page = (props) => (
    <Container>
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

export default Page;
