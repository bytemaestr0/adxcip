import { useRef, useState } from 'react';
import { WaxSeal, SprigLeft, SprigRight } from './Icons';
import Card from './Card';
import './Envelope.css';

const FLAP_OPEN_MS = 900;
const POP_OUT_MS = 400;
const LEAVE_MS = 650;

// Owns the whole "letter" experience: the sealed envelope, the seal-click
// open animation, and then popping each card on top of the still-visible
// envelope one at a time. The envelope itself is only ever discarded once
// the person answers the final question and we hand off to the slideshow.
export default function Envelope({ greeting, hint, cards, onFinish }) {
  const [opened, setOpened] = useState(false);
  const [cardIndex, setCardIndex] = useState(-1); // -1 = no card popped yet
  const [slotAnim, setSlotAnim] = useState(null); // 'enter' | 'exit'
  const [leaving, setLeaving] = useState(false);
  const busyRef = useRef(false);

  function handleSealClick() {
    if (opened) return;
    setOpened(true);
    window.setTimeout(() => {
      setCardIndex(0);
      setSlotAnim('enter');
    }, FLAP_OPEN_MS);
  }

  function handleAdvance() {
    if (busyRef.current) return;
    busyRef.current = true;
    setSlotAnim('exit');
    window.setTimeout(() => {
      setCardIndex((i) => i + 1);
      setSlotAnim('enter');
      busyRef.current = false;
    }, POP_OUT_MS);
  }

  function handleYes() {
    if (busyRef.current) return;
    busyRef.current = true;
    setSlotAnim('exit');
    window.setTimeout(() => {
      setLeaving(true);
      window.setTimeout(() => {
        onFinish();
      }, LEAVE_MS);
    }, POP_OUT_MS);
  }

  const currentCard = cardIndex >= 0 ? cards[cardIndex] : null;

  return (
    <div className={`envelope-stage ${leaving ? 'is-leaving' : ''}`}>
      <div className="envelope-sky" />

      <div className="envelope-frame">
        <p className={`envelope-eyebrow ${opened ? 'is-hidden' : ''}`}>{hint}</p>

        <div className={`envelope ${opened ? 'is-open' : ''} ${currentCard ? 'has-card' : ''}`}>
          <div className="envelope-back" />

          <div className="envelope-flap-shadow" />

          <div className="envelope-body">
            <SprigLeft className="envelope-sprig envelope-sprig-left" />
            <span className="envelope-greeting">{greeting}</span>
            <SprigRight className="envelope-sprig envelope-sprig-right" />
          </div>

          <div className="envelope-flap" />

          <button
            type="button"
            className="seal-button"
            onClick={handleSealClick}
            aria-label="Open the letter"
          >
            <WaxSeal className="seal-icon" cracked={opened} />
          </button>

          {currentCard && (
            <div
              key={cardIndex}
              className={`popped-card-slot ${slotAnim === 'enter' ? 'anim-enter' : ''} ${
                slotAnim === 'exit' ? 'anim-exit' : ''
              }`}
            >
              <Card
                heading={currentCard.heading}
                body={currentCard.body}
                isFinal={currentCard.isFinal}
                question={currentCard.question}
                isLast={cardIndex === cards.length - 1}
                onAdvance={handleAdvance}
                onYes={handleYes}
              />
            </div>
          )}
        </div>

        <p className={`envelope-instruction ${opened ? 'is-hidden' : ''}`}>Press the seal to open</p>
      </div>
    </div>
  );
}
