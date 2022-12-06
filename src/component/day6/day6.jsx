import React from 'react';
import { TemplateOfTheDay } from '../template';
import { source } from './source';

 export const Day6 = (results) => {
  const getCountOfCharacters = (data, countDistinctChar) => {
    const cleanData = data[0].split("");
    for (let index = 0; index < cleanData.length; index++) {
      const fourCharacters = cleanData.slice(index, index + countDistinctChar);
      const uniqueFour = new Set(fourCharacters);
      if (uniqueFour.size === countDistinctChar) {
        return index + countDistinctChar;
      }
    }
  };

  const resultOne = getCountOfCharacters(source, 4);
  const reusltTwo = getCountOfCharacters(source, 14)

  return (
    <TemplateOfTheDay
      numberOfDay={6}
      resultOne={resultOne}
      resultTwo={reusltTwo}
      results={results}
    />
  );
};