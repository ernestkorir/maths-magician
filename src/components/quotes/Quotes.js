import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './Quotes.css';

const Quotes = () => {
  const randomQuotes = [
    {
      quote: 'Nature hates calculators',
      id: uuidv4,
      creator: 'Ralph Waldo Emerson',
    },
    {
      quote: '"Calculators can only calculate - they cannot do mathematics." ~ John A. Van de Walle',
      id: uuidv4,
      creator: 'John A. Van de Walle',
    },
    {
      quote: 'I am always crunching numbers, so my calculator watch is a must.',
      id: uuidv4,
      creator: 'David Neeleman',
    },
    {
      quote: '"A businessman is a hybrid of a dancer and a calculator." ~ Paul Valery',
      id: uuidv4,
      creator: 'Paul Valery',
    },
    {
      quote: 'One who scorns the power of intuition will never rise above the ranks of journeyman calculator.',
      id: uuidv4,
      creator: 'Albert Einstein',
    },
  ];

  return (
    <ul className="quotes-Container">
      {randomQuotes.map((q) => (
        <li key={q.id}>
          <p className="quote">
            &#34;
            {q.quote}
            &#34;
          </p>
          <p className="creator">{q.creator}</p>
        </li>
      ))}
    </ul>
  );
};

export default Quotes;
