import React, { Component } from 'react';
import Page from '../components/Page';

class Images extends Component {
  onOver = (ind) => {
    this.setState({
      activeImageIndex: ind,
    });
  }

  imgs = [
    { name: 'Black crowd', path: 'blackcrowd.png' },
    { name: 'Edge of dreams', path: 'edgeofdream.jpg' },
    { name: 'Gloomy forest', path: 'hauntedforest.png' },
    { name: 'Ocean star', path: 'oceanstar.png' },
    { name: 'Color processing', path: 'colorprocessing.png' },
    { name: 'Black castle', path: 'blackcastle.png' },
    { name: 'Futuristic roads', path: 'futuristicroads.jpg' },
    { name: 'Futuristic subway', path: 'futuristicsubway.jpg' },
    { name: 'Gloomy town', path: 'gloomytown.png' },
    { name: 'Moonlight', path: 'moonlight.jpg' },
    { name: 'Oxford', path: 'oxford.jpg' },
    { name: 'Time to rest', path: 'timetorest.jpg' },
    { name: 'Red season', path: 'redseason.png' },
    { name: 'In my mirror', path: 'inthemirror.png' },
    { name: 'Time travel', path: 'timetravel.png' },
    { name: 'Freedom, where is me?', path: 'freedom.png' },
    { name: 'By the sea', path: 'bythesea.jpg' },
    { name: 'Long, long road', path: 'longlongroad.jpg' },
    { name: 'Training data', path: 'trainingdata.png' },
    { name: 'Space travel', path: 'spacetravel.png' },
    { name: 'Moving on', path: 'movingon.png' },
    { name: 'Crimson city', path: 'crimsoncity.png' },
    { name: 'At the shore of my dream', path: 'attheshoreofmydream.png' },
  ];

  constructor(props) {
    super(props);
    this.state = {
      activeImageIndex: 0,
    };
  }

  render() {
    const { activeImageIndex } = this.state;

    const imgBuilder = ImgClassName => obj => (
      <img
        key={`${ImgClassName}-${obj.path}`}
        className={ImgClassName}
        alt={obj.path}
        title={obj.name}
        src={`static/contents/images/${obj.path}`}
      />
    );

    const activeImage = this.imgs[activeImageIndex];

    return (
      <Page title="Images" htmlTitle="Images">
        <div className="row">
          <div className="five columns gallery">
            {
              this.imgs.map((obj, ind) => <div onMouseEnter={() => this.onOver(ind)}>{imgBuilder('center-cropped')(obj)}</div>)
            }
          </div>
          <div className="seven columns display-panel">
            <div>
              { imgBuilder('display-panel-img')(activeImage) }
              <h6>{activeImage.name}</h6>
            </div>
          </div>
        </div>
        <style>{`
          .center-cropped {
            object-fit: cover;
            object-position: center; /* Center the image within the element */
            height: 160px;
            width: 160px;
            margin-right: .3em;
            border: 1px solid #000;
            background: white;
          }

          .gallery div {
            display: inline-block;
          }

          .display-panel {
            visibility: hidden;
          }

          .display-panel img {
            max-height: 60%;
            max-width: 400px;
            position: fixed;
            border: 1px solid #000;
          }

          .display-panel h6 {
            position: fixed;
            transform: translate(0, -22px);
          }


          /* tablet & upper */
          @media (min-width: 600px) {
            .display-panel {
              visibility: visible;
            }
          }
        `}</style>
      </Page>
    );
  }
}

export default Images;
