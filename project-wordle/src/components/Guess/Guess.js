import React from 'react';

import { range } from '../../utils';
import { checkGuess } from '../../game-helpers';

function Guess({ word, answer }) {
  const result = checkGuess(word, answer);

  return (
    <p className='guess'>
      {range(5).map((num) => {
        let status = result ? result[num].status : undefined;

        // removes the undefined per Josh video
        const className = status ? `cell ${status}` : `cell`;

        return (
          <span key={num} className={className}>
            {word ? word[num] : undefined}
          </span>
        );
      })}
    </p>
  );
}

export default Guess;
