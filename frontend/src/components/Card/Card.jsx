import React from 'react';

const Card = ({ imageUrl, eventName, onClick }) => {
  return (
    <div className="w-72 h-64 bg-zinc-700 rounded-md m-5 flex flex-col justify-end cursor-pointer" onClick={onClick}>
      <img src={imageUrl} alt="" className='w-full h-full rounded-md'/>
      <div className="bg-black bg-opacity-50 p-2 rounded-md">
        <h1 className="text-white text-sm font-semibold">{eventName}</h1>
      </div>
    </div>
  );
};

export default Card;
