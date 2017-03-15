import React from 'react';
import Head from './DefaultHead';
import Logo from './Logo';

export default (props) => {
  return (
    <div>
      <Head title={props.htmlTitle} />
      <div className="container">
        <Logo />
        {props.children}
      </div>
    </div>
  );
};
