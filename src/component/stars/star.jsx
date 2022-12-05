import React from 'react';

export const Star = (result) => {
  console.log(result)

  return (
    <div>
      <span className={`material-symbols-outlined ${result.result ? ' star star--active' : ' star'}`}>
        star
      </span>
    </div>
  );
};
