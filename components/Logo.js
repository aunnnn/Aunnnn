import React, { Component } from 'react';
import Link from 'next/link';
import _ from 'lodash';

function getRandomColor() {
  function c() {
    const hex = Math.floor(Math.random() * 256).toString(16);
    return (`0${String(hex)}`).substr(-2); // pad with zero
  }
  return `#${c()}${c()}${c()}`;
}

const constants = {
  MIN_COUNT: 6,
  MAX_COUNT: 44,
  FROM_COLOR: {
    r: 0,
    g: 0,
    b: 255,
  },
};

function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}


function rgbToHex(r, g, b) {
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  }
  return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}

export default class Logo extends Component {

  constructor(props) {
    super(props);
    this.state = {
      count: constants.MIN_COUNT,
      toColor: '#D9CC22',
    };
    this.onOver = _.throttle(this.onOver.bind(this), 80);
    this.onLeave = this.onLeave.bind(this);
    this.tickLeave = this.tickLeave.bind(this);
    this.tickOver = this.tickOver.bind(this);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  onOver() {
    this.setState({
      toColor: getRandomColor(),
    });
    clearInterval(this.timer);
    this.timer = setInterval(this.tickOver, 20);
  }

  onLeave() {
    clearInterval(this.timer);
    this.timer = setInterval(this.tickLeave, 20);
  }

  throttledSetRandomToColor = _.throttle(() => this.setState({ toColor: getRandomColor() }), 250)

  tickOver() {
    const count = this.state.count;
    if (count === constants.MAX_COUNT) {
      this.throttledSetRandomToColor();
      return;
    }
    this.setState({ count: count + 1 });
  }

  tickLeave() {
    const count = this.state.count;
    if (count === constants.MIN_COUNT) {
      clearInterval(this.timer);
      return;
    }
    this.setState({ count: count - 1 });
  }

  textForCount = n => `Au${Array(n).join('n')}`

  lerp = (From, To, t) => From + (t * (To - From))

  colorForCount = (n) => {
    if (n === 6) {
      return 'blue';
    }
    const MIN = constants.MIN_COUNT;
    const MAX = constants.MAX_COUNT;
    const t = (n - MIN) / (MAX - MIN);

    const fromColor = constants.FROM_COLOR;
    const toColor = hexToRgb(this.state.toColor);

    const r3 = Math.floor(this.lerp(fromColor.r, toColor.r, t));
    const g3 = Math.floor(this.lerp(fromColor.g, toColor.g, t));
    const b3 = Math.floor(this.lerp(fromColor.b, toColor.b, t));
    return rgbToHex(r3, g3, b3);
  }

  render() {
    const text = this.textForCount(this.state.count);
    const color = this.colorForCount(this.state.count);
    return (
      <div className="logo">
        <p
          onMouseEnter={this.onOver}
          onMouseLeave={this.onLeave}
        >
          <Link prefetch href="/">{text}</Link>
        </p>
        <style>{`
          .logo a {
            text-decoration: none;
            color: ${color};
          }

          .logo {
            padding-top: 56px;
            padding-bottom: 24px;
            height: 64px;
          }
        `}</style>
      </div>
    );
  }
}
