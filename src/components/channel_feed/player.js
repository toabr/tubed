import React from 'react';

const Player = ({url,changeSelectedVideo}) => {

  const unmount = () => {
    if (window.confirm("Do you really want to quit?")) {
      changeSelectedVideo(null);
    }
  }

  return(
    <div className={'fixed-top h-100 w-100 ' }>
      <div className="h-100 w-100" style={{background:'black',opacity:0.85}} onClick={unmount} ></div>
      <div className="fixed-top w-75 mx-auto ">
      <button type="button" className="close m-2">&times;</button>
        <div className="embed-responsive embed-responsive-16by9 shadow">
          <iframe className="embed-responsive-item" id="ytplayer" type="text/html" src={url} />
        </div>
      </div>
    </div>
  )
}

export default Player;
