import React from 'react';
import Container from './Container';

const Page = (props) => {
  return (
    <Container>
    <h3>{props.title}</h3>
    {props.children}
    </Container>
  );
};

Page.propTypes = {
  title: React.PropTypes.string.isRequired,
};

export default Page;
