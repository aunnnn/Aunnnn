import React, { Component } from 'react';
import _ from 'lodash';
import dynamic from 'next/dynamic';
import Page from '../components/Page';

// import Lightbox from 'react-images';
let Lightbox = null;

class Images extends Component {
  imgs = _.range(1, 91)
  // imgs = [
  //   { name: 'Black crowd', path: 'blackcrowd' },
  //   { name: 'Edge of the world', path: 'edgeofdream' },
  //   { name: 'Gloomy forest', path: 'hauntedforest' },
  //   { name: 'Ocean of stars', path: 'oceanstar' },
  //   { name: 'Processing', path: 'colorprocessing' },
  //   { name: 'Black castle', path: 'blackcastle' },
  //   { name: 'Futuristic roads', path: 'futuristicroads' },
  //   { name: 'Futuristic subway', path: 'futuristicsubway' },
  //   { name: 'Gloomy town', path: 'gloomytown' },
  //   { name: 'Moonlight', path: 'moonlight' },
  //   { name: 'Oxford', path: 'oxford' },
  //   { name: 'Time to rest', path: 'timetorest' },
  //   { name: 'Red season', path: 'redseason' },
  //   { name: 'In my mirror', path: 'inthemirror' },
  //   { name: 'Time travel', path: 'timetravel' },
  //   { name: 'Freedom', path: 'freedom' },
  //   { name: 'By the sea', path: 'bythesea' },
  //   { name: 'Long road', path: 'longlongroad' },
  //   { name: 'Training data', path: 'trainingdata' },
  //   { name: 'Space travel', path: 'spacetravel' },
  //   { name: 'Moving on', path: 'movingon' },
  //   { name: 'Crimson city', path: 'crimsoncity' },
  //   { name: 'At the shore', path: 'attheshoreofmydream' },
  // ]

  constructor(props) {
    super(props);
    this.state = {
      currentImage: 0,
      lightboxIsOpen: false,
    };
  }

  openLightbox = (ind) => {
    // Load image viewer on first tap
    if (!Lightbox) {
      Lightbox = dynamic(import('react-images'), {
        ssr: false,
      });
    }
    this.setState({
      currentImage: ind,
      lightboxIsOpen: true,
    });
  }

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious = () => {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext = () => {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  goToImage = (ind) => {
    this.setState({
      currentImage: ind,
    });
  }

  handleClickImage = () => {
    if (this.state.currentImage === this.imgs.length - 1) {
      return;
    }
    this.gotoNext();
  }

  render() {
    const imgBuilder = ImgClassName => obj => (
      <img
        key={`${ImgClassName}-${obj}`}
        className={ImgClassName}
        alt={obj}
        title={obj}
        // src={`static/contents/images/${obj}.jpg`}
        src={`https://s3-ap-southeast-1.amazonaws.com/aunnnn.com/gallery/${obj}.jpg`}
      />
    );

    return (
      <Page title="Images" htmlTitle="Images">
        <div className="description row">
          <p>I love exploring different worlds in my mind via digital painting. Most are done using Paper53 or Procreate.</p>
        </div>
        <div className="row">
          <div className="gallery">
            {
              this.imgs.map((obj, ind) => <div key={`img_${ind}`} onClick={() => this.openLightbox(ind)}>{imgBuilder('center-cropped')(obj)}</div>)
            }
          </div>
        </div>
        {Lightbox && <Lightbox
          currentImage={this.state.currentImage}
          images={this.imgs.map((obj) => {
            return { src: `static/contents/images/${obj}.jpg` };
          })}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.goToImage}
          onClose={this.closeLightbox}
          showThumbnails
        />}
        <style>{`
          .description {
            margin: 20px 0px;
          }
          .description p {
            font-size: 16px;
          }
          .center-cropped {
            object-fit: cover;
            object-position: center; /* Center the image within the element */
            height: 160px;
            width: 160px;
            margin-right: .3em;
            border: 1px solid #000;
            background: white;
            cursor: pointer;
            opacity: 1.0;
            filter: alpha(opacity=100);
          }
          .center-cropped:hover {
            opacity: 0.8;
            filter: alpha(opacity=80);
          }

          .gallery {
            text-align: center;
          }

          .gallery div {
            display: inline-block;
          }
        `}</style>
      </Page>
    );
  }
}

export default Images;
