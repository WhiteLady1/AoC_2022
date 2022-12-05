import React from 'react';
import { Star } from './star';

export const Stars = (results) => {
  console.log(results)
  console.log(results.values.results)
  return (
    <div className="stars">
      <Star result={results.values.results[0]} />
      <Star result={results.values.results[1]} />
    </div>
);}
