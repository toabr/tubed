import React from 'react';

export default function ChannelBtn({ title, state, icon, onClick}) {
  return(
    <button className={`float-right btn btn-${state}`} onClick={(e) => onClick(e)} >
      <i className={`fa fa-${icon}`}></i> <span>{title}</span>
    </button>
  );
}
