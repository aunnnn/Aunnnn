import React, { Component } from 'react';
import Link from 'next/link';
import _ from 'lodash';

export default () => (
  <div className="logo">
    <Link prefetch href="/">
      <div>
        <img src="/static/assets/logo_closeup.jpg" style={{
          width: '70px',
          height: '70px',
          display: 'inline',
          verticalAlign: 'bottom' }}
        />
        <a>aunnnn</a>
      </div>
    </Link>

    <style jsx>{`
      .logo {
        cursor: pointer;
      }

      .logo a {
        text-decoration: none;
        display: inline;
        padding-left: 8px;
        color: black;
        font-weight: bold;
        font-size: 26px;
        font-family: 'Trebuchet MS';
      }

      .logo {
        padding-top: 36px;
        padding-bottom: 42px;
      }

      .logo img {
        background-color: white;
      }
    `}</style>
  </div>
)
