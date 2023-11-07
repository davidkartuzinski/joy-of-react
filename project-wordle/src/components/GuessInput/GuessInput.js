import React from 'react';

function GuessInput({ handleAddGuess, gameStatus }) {
  const [guess, setGuess] = React.useState('');
  const [error, setError] = React.useState('');

  const handleChange = (event) => {
    const value = event.target.value.toUpperCase();

    if (!/^[A-Z]{0,5}$/.test(value)) {
      if (value.length <= 5) {
        setError('Please type in only letter characters.');
      }
      return;
    }
    setGuess(value);
  };

  function handleSubmit(event) {
    event.preventDefault();

    if (guess.length !== 5 || guess.trim() === '') {
      setError('Please type in a word with exactly 5 letters.');
      return;
    }

    handleAddGuess(guess);
    setGuess('');
    setError('');
  }

  return (
    <form className='guess-input-wrapper' onSubmit={handleSubmit}>
      <label htmlFor='guess-input'>Enter guess:</label>
      <div
        style={{
          color: 'red',
          display: 'block',
          height: '2rem',
          marginBottom: '1rem',
        }}
      >
        {error}
      </div>

      <input
        disabled={gameStatus !== 'running'}
        value={guess}
        onChange={handleChange}
        id='guess-input'
        type='text'
      />
    </form>
  );
}

export default GuessInput;
