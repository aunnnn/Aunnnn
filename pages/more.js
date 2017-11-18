import React from 'react';
import Page from '../components/Page';

export default () => {
  const links = [
    { logo: 'github.svg', alt: 'github', url: 'https://github.com/aunnnn' },
    { logo: 'linkedin.svg', alt: 'linkedin', url: 'https://www.linkedin.com/in/wirawit-rueopas-437518120/' },
    { logo: 'medium.svg', alt: 'medium', url: 'https://medium.com/@aunnnn' },
  ];
  return (
    <Page htmlTitle="More">
      <div className="main">
        <ul>
          {
            links.map(({ logo, alt, url }) => {
              return (
                <li key={alt}>
                  <a className="link-logo" id={alt} href={url}>
                    <img src={`/static/assets/${logo}`} alt={alt}/>
                  </a>
                </li>
              )
            })
          }
        </ul>
      </div>
      <style jsx>{`
        .main {
          margin-top: 20px;
        }
        ul {
          list-style: none;
        }
        li {
          display: inline;
        }
        .link-logo {
          padding: 12px;
        }
        .link-logo:hover {
          opacity: 0.5;
        }
        .link-logo img {
          width: 28px;
          height: 28px;
        }
      `}</style>
    </Page>
  );
};
