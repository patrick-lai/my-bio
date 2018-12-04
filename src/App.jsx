/**
 * Root container
 */

import React from 'react';
import ReactDOM from 'react-dom';
import _throttle from 'lodash/throttle';
import { Parallax, ParallaxLayer } from 'react-spring/dist/addons';
import { Spring, config } from 'react-spring';
import './assets/stars.svg';

// Parceljs needs better support for inline urls:
// NOTE: Seems like you also have to import it for this to work
const getUrl = relativePath => `url(${require(relativePath)})`;

const makeStars = speed => (
  <React.Fragment>
    {[0, 1, 2].map((offset, index) => (
      <ParallaxLayer
        key={index}
        offset={offset}
        speed={speed}
        factor={speed * 2}
        style={{
          backgroundImage: getUrl('./assets/stars.svg'),
          backgroundPostiion: speed > 2 ? 'right' : 'center',
          backgroundSize: speed > 2 ? 'cover' : 'contain'
        }}
      />
    ))}
  </React.Fragment>
);

const Content = ({ children, offset = 0 }) => (
  <div
    offset={offset}
    speed={1}
    factor={1}
    style={{
      padding: '5em',
      position: 'relative'
    }}
  >
    {children}
  </div>
);

export default class App extends React.Component {
  state = { bgPos: 0 };

  // Update the lens flare minutely in opposite direction of scroll to make the space feel very very large
  updateLensFlare = _throttle(() => {
    const scrollOffset = this.parallax.current / this.parallax.space - 1;
    this.setState({ bgPos: scrollOffset * 50 });
  }, 120);

  render() {
    const { bgPos } = this.state;

    return (
      <div onWheel={this.updateLensFlare}>
        <Parallax
          style={{
            background: `radial-gradient(circle at center, #0f2027, #1f3e4c, #0f2027)`,
            backgroundPosition: `0 ${bgPos}px`,
            backgroundSize: '180%'
          }}
          ref={ref => (this.parallax = ref)}
          pages={3}
          config={config.wobbly}
        >
          {[2, 3].map(makeStars)}

          <Content>
            <Spring from={{ number: 0 }} to={{ number: 1 }}>
              {props => <div>{props.number}</div>}
            </Spring>
            {/* <h1>WebAudio api</h1>
          <Browser height={500}>
            <iframe
              src="https://audio-ripple.firebaseapp.com/"
              frameBorder={0}
            />
          </Browser>

          <hr />

          <h1>WebAudio api</h1>
          <Browser height={500}>
            <iframe
              src="https://audio-ripple.firebaseapp.com/"
              frameBorder={0}
            />
          </Browser> */}
          </Content>
        </Parallax>
      </div>
    );
  }
}
