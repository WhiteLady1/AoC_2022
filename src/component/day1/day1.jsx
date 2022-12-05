import React from 'react';
import { TemplateOfTheDay } from '../template';
import { source } from './source';

export const Day1 = (results) => {
  const getMostCalories = (data) => {
    let totalCalories = 0;
    let elfCalories = 0;

    data.forEach((pack) => {
      if (pack !== 'x') {
        elfCalories = elfCalories + pack;
      } else {
        if (elfCalories >= totalCalories) {
          totalCalories = elfCalories;
        }
        elfCalories = 0;
      }
    });

    return totalCalories;
  };

  const getTopTree = (data) => {
    let topTree = [0, 0, 0];
    let elfCalories = 0;

    data.forEach((pack) => {
      if (pack !== 'x') {
        elfCalories = elfCalories + pack;
      } else {
        if (elfCalories > Math.min(...topTree)) {
          topTree[topTree.indexOf(Math.min(...topTree))] = elfCalories;
        }
        elfCalories = 0;
      }
    });
    return (topTree[0] + topTree[1] + topTree[2]);
  };

  const resultOne = getMostCalories(source);
  const resultTwo = getTopTree(source);

  return (
    <TemplateOfTheDay
      numberOfDay={1}
      resultOne={resultOne}
      resultTwo={resultTwo}
      results={results}
    />
  )
};
