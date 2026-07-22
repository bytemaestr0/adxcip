import { useState } from 'react';
import { CornerFlourish, LineHeart, ArrowDown } from './Icons';
import './Card.css';

const MAX_NO_CLICKS = 5;

function QuestionButtons({ onYes }) {
  const [noClicks, setNoClicks] = useState(0);

  const yesScale = 1 + noClicks * 0.4;
  const noOverwhelmed = noClicks >= MAX_NO_CLICKS;

  function handleNoClick() {
    setNoClicks((count) => Math.min(count + 1, MAX_NO_CLICKS));
  }

  return (
    <div className="card-question-buttons">
      <button
        type="button"
        className="card-no-button"
        onClick={handleNoClick}
        disabled={noOverwhelmed}
        aria-hidden={noOverwhelmed}
        tabIndex={noOverwhelmed ? -1 : 0}
      >
        No
      </button>
      <button
        type="button"
        className="card-yes-button"
        onClick={onYes}
        style={{ transform: `scale(${yesScale})` }}
      >
        Yes, always
      </button>
    </div>
  );
}

// A single letter "page". Rendered inside the envelope's popped-card slot,
// so it fills whatever space that slot gives it rather than assuming a
// full-page layout.
export default function Card({ heading, body, isFinal, question, isLast, onAdvance, onYes }) {
  return (
    <article className={`card card-popped ${isFinal ? 'card-final' : ''}`}>
      <CornerFlourish className="card-flourish card-flourish-tl" />
      <CornerFlourish className="card-flourish card-flourish-br" />

      <div className="card-scroll">
        {heading && <h2 className="card-heading">{heading}</h2>}

        {Array.isArray(body) ? (
          body.map((paragraph, i) => (
            <p className="card-body" key={i}>
              {paragraph}
            </p>
          ))
        ) : (
          <p className="card-body">{body}</p>
        )}

        {isFinal && question && (
          <div className="card-question">
            <LineHeart className="card-question-heart" filled />
            <p className="card-question-text">{question}</p>
            <QuestionButtons onYes={onYes} />
          </div>
        )}
      </div>

      {!isLast && !isFinal && (
        <button
          type="button"
          className="card-advance card-advance-popped"
          onClick={onAdvance}
          aria-label="Next"
        >
          <ArrowDown className="card-advance-icon" />
        </button>
      )}
    </article>
  );
}
