import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

const Menu = ({ menu }) => (
  <div>
    <ul>
      {
        menu.map(({ path, title }) => (
          <li key={title}>
            <Link prefetch href={path}>
              <a>{`${title}`}</a>
            </Link>
          </li>
        ))
      }
    </ul>
    <style jsx>{`

      ul {
        list-style: none;
      }

      li {
        display: inline;
        padding: 0 12px 0 0;
      }

      li a {
        color: #303030;
        text-decoration: none;
        font-weight: bold;
      }

      li a:hover {
        color: #303030;
        background-color: yellow;
      }

    `}</style>
  </div>
);

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
