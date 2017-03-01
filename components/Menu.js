import React from 'react';
import Link from 'next/link';

const Menu = ({ menu }) => (
  <div className="inline-div">
    {
      menu.map(({ path, title }) => (
        <Link prefetch href={path} key={path}>{`${title}`}</Link>
      ))
    }
    <style>{`

      .inline-div {
        display: inline-block;
      }

      .inline-div a {
        text-decoration: none;
        color: #303030;
        margin: auto 12px auto 0;
      }

      .inline-div a:hover {
        background-color: yellow;
      }

    `}</style>
  </div>
);

Menu.propTypes = {
  menu: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
