import React from 'react';
import { TemplateOfTheDay } from '../template';
import { moves, cargo } from './source';

const TEST_MOVES = ["move 4 from 9 to 1", "move 6 from 3 to 1"];
const CARGO = cargo;

export const Day5 = (results) => {
  const getCleanData = (data) => {
    const dataPartOne = data.map(item => item.split(' '));
    return dataPartOne;
  };

  const getRearrange = (movesData, cargoData, part) => {
    const cargoPositon = [['F', 'H', 'B', 'V', 'R', 'Q', 'D', 'P'],['L', 'D', 'Z', 'Q', 'W', 'V'],['H', 'L', 'Z', 'Q', 'G', 'R', 'P', 'C'],['R', 'D', 'H', 'F', 'J', 'V', 'B'],['Z', 'W', 'L', 'C'],['J', 'R', 'P', 'N', 'T', 'G', 'V', 'M'],['J', 'R', 'L', 'V', 'M', 'B', 'S'],['D', 'P', 'J'],['D', 'C', 'N', 'W', 'V']];
    const cleanMoves = getCleanData(movesData);
    let resultString = [];

    cleanMoves.forEach(item => {
      let oldPosition = Number(item[3]) - 1;
      let newPosition = Number(item[5]) -1;
      let count = Number(item[1]);
      let cargoForMove = cargoPositon[oldPosition].splice(- count, count);

      if ( part === 'first') {
        cargoForMove.forEach((_, index) => {
          cargoPositon[newPosition].push(cargoForMove[cargoForMove.length - index - 1]);
        })
      }

      if (part === 'second') {
        cargoPositon[newPosition].push(...cargoForMove);
      }
    });
    cargoPositon.forEach(position => {
      resultString = resultString + position[position.length - 1]
    })
    return resultString;
  };

  const resultOne = getRearrange(moves, CARGO, 'first');
  const resultTwo = getRearrange(moves, CARGO, 'second');

  return (
    <TemplateOfTheDay
      numberOfDay={5}
      resultOne={resultOne}
      resultTwo={resultTwo}
      results={results}
    />
  )
};
