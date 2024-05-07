import React from 'react';
import 'react-piano/dist/styles.css';

import Header from './Header';
import Footer from './Footer';
import InteractiveDemo from './InteractiveDemo';
// import PlaybackDemo from './PlaybackDemo';
// import { lostWoods } from './songs';
import './App.css';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

function Installation() {
  return (
    <div className="text-center">
    </div>
  );
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-8 offset-md-2">
              <InteractiveDemo audioContext={audioContext} soundfontHostname={soundfontHostname} />
            </div>
          </div>
          <hr className="mt-5" />
          <div className="row mt-5">
            {/* <div className="col-md-8 offset-md-2">
              <PlaybackDemo
                audioContext={audioContext}
                soundfontHostname={soundfontHostname}
                song={lostWoods}
              />
            </div> */}
          </div>
          <hr className="mt-5" />
          <div className="row mt-5">
            <div className="col">
              <Installation />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
