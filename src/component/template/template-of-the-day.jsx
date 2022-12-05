import React from 'react';
import { Stars } from '../stars';

export const TemplateOfTheDay = ({numberOfDay, resultOne, resultTwo, results}) => (
  <div className="day-container">
    <h3>Day {numberOfDay}</h3>
    <p>step 1: {resultOne}</p>
    <p>step 2: {resultTwo}</p>
    <Stars values={results} />
  </div>
);
