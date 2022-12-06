import React from 'react';
import { Star } from './star';

export const Stars = (results) => (
  <div className="stars">
    <Star result={results.values.results[0]} />
    <Star result={results.values.results[1]} />
  </div>
);
