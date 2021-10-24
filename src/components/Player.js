import React, { useState, useEffect } from "react";
import speaker from "../img/speaker.png"
import speakerMute from "../img/speaker-mute.png"

const useAudio = url => {
    let [audio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(true);

    const toggle = () => setPlaying(!playing);
    
    useEffect(() => {
        playing ? audio.play().catch(error => {}) : audio.pause();
    },[playing, audio])

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(true));
        return () => {
        audio.removeEventListener('ended', () => setPlaying(true));
        };
    }, [audio]);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [play, toggle] = useAudio(url);
    return (
        <img onClick={toggle} className="speaker-btn" src={play ? speaker : speakerMute} alt="Music"/>
    );
};

export default Player;