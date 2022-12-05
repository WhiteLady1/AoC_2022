import React from 'react';
import { TemplateOfTheDay } from '../template';
import { source } from './source';

export const Day4 = (results) => {
  // "71-71,42-72", "27-28,27-99", "15-79,14-78"

  const getSections = (sections, allNumbers) => {
    const data = sections.split(',');
    let numbersOne = [];
    let numbersTwo = [];

    const areaOne = data[0].split('-'); //71, 71 ; 42, 72
    for (let x = Number(areaOne[0]); x < Number(areaOne[1]) + 1; x++) {
      numbersOne.push(x);
    }

    const areaTwo = data[1].split('-'); //71, 71 ; 42, 72
    for (let x = Number(areaTwo[0]); x < Number(areaTwo[1]) + 1; x++) {
      numbersTwo.push(x);
    }

    const includesNumbersOne = numbersOne.map(item => {
      return numbersTwo.includes(item)
    })

    const includesNumberTwo = numbersTwo.map(item => {
      return numbersOne.includes(item);
    })

    
    if (allNumbers === true) {
      if (includesNumbersOne.includes(false) && includesNumberTwo.includes(false)) {
        return false;
      } else {
        return true;
      };
    } else {
      if (includesNumbersOne.includes(true) || includesNumberTwo.includes(true)) {
        return true;
      } else {
        return false;
      };
    }
    
  };

  const getFullyContainsSection = (data, allNumbers) => {
    let count = 0;
    data.forEach(item => {
      if (getSections(item, allNumbers) === true) {
        count++;
      }
    })
    return count
  };

  const resultOne = getFullyContainsSection(source, true);
  const resultTwo = getFullyContainsSection(source, false);

  //part two
  //overlapat all pars of areas

  return (
    <TemplateOfTheDay
      numberOfDay={4}
      resultOne={resultOne}
      resultTwo={resultTwo}
      results={results}
    />
  )
};
