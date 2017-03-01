import React, { Component } from 'react';
import Page from '../components/Page';

export default () => {
  const imgs = [
    { name: 'Black crowd', path: 'blackcrowd.png' },
    { name: 'Edge of dreams', path: 'edgeofdream.jpg' },
    { name: 'Gloomy forest', path: 'hauntedforest.png' },
    { name: 'Ocean star', path: 'oceanstar.png' },
    { name: 'Color processing', path: 'colorprocessing.png' },
  ];

  return (
    <Page title="Images">
      <div className="gallery">
        {
          imgs.map(({ name, path }) => <img className="center-cropped" alt={path} title={name} src={`static/contents/images/${path}`} />)
        }
      </div>
      <style>{`
        .center-cropped {
          object-fit: cover;
          object-position: center; /* Center the image within the element */
          height: 180px;
          width: 180px;
          margin-right: .3em;
          border: 1px solid #000;
          background: white;
        }
      `}</style>
    </Page>
  );
};
