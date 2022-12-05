import React from 'react';
import { TemplateOfTheDay } from '../template';
import { source } from './source';

export const Day2 = (results) => {
  // A X 1  rock  lose 0
  // B Y 2  paper draw 3
  // C Z 3  scissors  win 6

  // win = 6
  // draw = 3
  // lost = 0

  const getMoveScore = (move) => {
    // move = "AZ";
    let opponent = move.charAt(0);
    let me = move.charAt(1);
    let score = 0;

    switch (opponent) {
      case 'A':
        if (me === 'X') {score = score + 3 + 1};
        if (me === 'Y') {score = score + 6 + 2};
        if (me === 'Z') {score = score + 0 + 3};
        break;
      case 'B':
        if (me === 'X') {score = score + 0 + 1};
        if (me === 'Y') {score = score + 3 + 2};
        if (me === 'Z') {score = score + 6 + 3};
        break;
      case 'C':
        if (me === 'X') {score = score + 6 + 1};
        if (me === 'Y') {score = score + 0 + 2};
        if (me === 'Z') {score = score + 3 + 3};
        break;
      default:
    };
    return score;
  };

  const getGameScore = (game) => {
    let gameScore = 0;
    game.forEach(move => {
      gameScore = gameScore + getMoveScore(move);
    });

    return gameScore;
  };

  // A 1  rock  X lose 0
  // B 2  paper Y draw 3
  // C 3  scissors  Z win 6

  const getMoveScore2 = (move) => {
    // move = "AZ";
    let opponent = move.charAt(0);
    let me = move.charAt(1);
    let score = 0;

    switch (opponent) {
      case 'A': // rock
        if (me === 'X') {score = score + 3 + 0}; //lose
        if (me === 'Y') {score = score + 1 + 3}; //draw
        if (me === 'Z') {score = score + 2 + 6}; //win
        break;
      case 'B': //paper
        if (me === 'X') {score = score + 1 + 0};
        if (me === 'Y') {score = score + 2 + 3};
        if (me === 'Z') {score = score + 3 + 6};
        break;
      case 'C': //scissors
        if (me === 'X') {score = score + 2 + 0};
        if (me === 'Y') {score = score + 3 + 3};
        if (me === 'Z') {score = score + 1 + 6};
        break;
      default:
    };
    return score;
  };

  const getGameScore2 = (game) => {
    let gameScore = 0;
    game.forEach(move => {
      gameScore = gameScore + getMoveScore2(move);
    });

    return gameScore;
  };

  const resultOne = getGameScore(source);
  const resultTwo = getGameScore2(source);

  return (
    <TemplateOfTheDay
      numberOfDay={2}
      resultOne={resultOne}
      resultTwo={resultTwo}
      results={results}
    />
  )
};
