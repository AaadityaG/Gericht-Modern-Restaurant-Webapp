import React, { useEffect } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { SubHeading } from '../../components';

import { meal } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();

  React.useEffect(() => {
    vidRef.current.play();
  })

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={meal}
        type="video/mp4"
        loop
        controls={false}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center">
          <h1 className='headtext__cormorant'>Eat, Chat, Live...</h1>
        </div>
      </div>
    </div>
  );
};

export default Intro;