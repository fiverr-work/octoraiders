import React, { useState, useEffect } from "react";
import speaker from "../img/speaker.png"
import speakerMute from "../img/speaker-mute.png"
// import ReactAudioPlayer from 'react-audio-player';

const useAudio = url => {
    const [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);

    useEffect(() => {
        playing ? audio.play() : audio.pause();
    },[playing])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
        return () => {
        audio.removeEventListener('ended', () => setPlaying(true));
        };
    }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [play, toggle] = useAudio(url);
    // const [play, setPlaying] = useState(true);
    // const toggle = () => setPlaying(!play);
    return (
        <>
        {/* <ReactAudioPlayer
            autoPlay
            src={url}
            controls
            loop
            preload='auto'
            muted={!play}
            className="d-none"
        /> */}
        <img onClick={toggle} className="speaker-btn" src={play ? speaker : speakerMute} alt="Music"/>
        </>
    );
};

export default Player;