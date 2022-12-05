import React from 'react';
import { TemplateOfTheDay } from '../template';
import { source } from './source';

export const Day3 = (results) => {
  // "QLFdFCdlLcVqdvFLnFLSSShZwptfHHhfZZZpSwfmHp"
  const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

  // const counter = (s) => [...s].reduce((a, c) => (a[c] = ++a[c] || 1) && a, {})
  // const getOftenLetter = (text) => {
  //   const letterArray = Object.values(counter(text));
  //   const oftenLetter = text.charAt(letterArray.indexOf(Math.max(...letterArray)));
  //   return oftenLetter;
  // };
  // console.log(getOftenLetter("QLFdFCdlLcVqdvFLnFLSSShZwptfHHhfZZZpSwfmHp"))

  const getLetter = (text) => {
      let letter;
      let firstPart = text.slice(0, (text.length / 2));
      let secondPart = text.slice((text.length / 2), text.length);

      for (let index = 0; index < firstPart.length; index++) {
        if (secondPart.includes(firstPart.charAt(index))) {
          letter = firstPart.charAt(index);
        };
      }
      return letter;
  };

  const getLettersScore = (data) => {
    let score = 0;
    const lettersArray = data.map(item => getLetter(item));

    lettersArray.forEach(letter => {
      let letterValue = alphabet.indexOf(letter) + 1;
      if (letterValue === 0) {
        letterValue = alphabet.indexOf(letter.toLowerCase()) + 27;
      }
      score = score + letterValue;
    })
    return score;
  };

  const getLetter2 = (data) => {
    let letter;
    let firstPart = data[0];
    let secondPart = data[1];
    let thirdPart = data[2];

    for (let index = 0; index < firstPart.length; index++) {
      if (secondPart.includes(firstPart.charAt(index))) {
        if (thirdPart.includes(firstPart.charAt(index))) {
          letter = firstPart.charAt(index);
        };
      };
    };
    return letter;
  };

  const getLettersScore2 = (data) => {
    let score = 0;
    let lettersArray=[];
    for (let index = 0; index < data.length - 2; index += 3) {
      lettersArray.push(getLetter2(data.slice(index, index + 3)));
    }

    lettersArray.forEach(letter => {
      let letterValue = alphabet.indexOf(letter) + 1;
      if (letterValue === 0) {
        letterValue = alphabet.indexOf(letter.toLowerCase()) + 27;
      }
      score = score + letterValue;
    })
    return score;
  };

  const resultOne = getLettersScore(source);
  const resultTwo = getLettersScore2(source);
  console.log('day3', results)

  return (
    <TemplateOfTheDay
      numberOfDay={3}
      resultOne={resultOne}
      resultTwo={resultTwo}
      results={results}
    />
  )
};
