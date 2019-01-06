import React from 'react';

const light = ({id, on}) => {
  return (
    <div key={id} id={id} className='light'>
      <span className={on ? 'on' : 'off'}>{id}</span>
    </div>
  )
}

export default light;
