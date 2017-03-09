import React from 'react';
import Link from 'next/link';
import shortid from 'shortid';

const Menu = ({ menu }) => (
  <div>
    <ul>
      {
        menu.map(({ path, title }) => (
          <li>
            <Link prefetch href={path} key={shortid.generate()}>
              {`${title}`}
            </Link>
          </li>
        ))
      }
    </ul>
    <style>{`

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
  menu: React.PropTypes.arrayOf(React.PropTypes.shape({
    path: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
  })).isRequired,
};

export default Menu;
