import React from 'react';
import { Piano, MidiNumbers } from 'react-piano';
import classNames from 'classnames';

import DimensionsProvider from './DimensionsProvider';
import SoundfontProvider from './SoundfontProvider';

class PlaybackDemo extends React.Component {
  state = {
    activeNotesIndex: 0,
    isPlaying: false,
    stopAllNotes: () => console.warn('stopAllNotes not yet loaded'),
  };

  constructor(props) {
    super(props);
    this.playbackIntervalFn = null;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isPlaying !== this.state.isPlaying) {
      if (this.state.isPlaying) {
        this.playbackIntervalFn = setInterval(() => {
          this.setState({
            activeNotesIndex: (this.state.activeNotesIndex + 1) % this.props.song.length,
          });
        }, 200);
      } else {
        clearInterval(this.playbackIntervalFn);
        this.state.stopAllNotes();
        this.setState({
          activeNotesIndex: 0,
        });
      }
    }
  }

  setPlaying = (value) => {
    this.setState({ isPlaying: value });
  };

  render() {
    const noteRange = {
      first: MidiNumbers.fromNote('c3'),
      last: MidiNumbers.fromNote('f5'),
    };

    return (
      <div>
       
      </div>
    );
  }
}

export default PlaybackDemo;
