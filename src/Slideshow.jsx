import { useCallback, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, LineHeart, SprigLeft, SprigRight } from './Icons';
import './Slideshow.css';

const AUTO_ADVANCE_MS = 5000;

export default function Slideshow({ photos }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (nextIndex) => {
      if (photos.length === 0) return;
      const wrapped = (nextIndex + photos.length) % photos.length;
      setIndex(wrapped);
    },
    [photos.length]
  );

  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const prev = useCallback(() => goTo(index - 1), [goTo, index]);

  useEffect(() => {
    if (paused || photos.length <= 1) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % photos.length);
    }, AUTO_ADVANCE_MS);
    return () => window.clearInterval(timer);
  }, [paused, photos.length]);

  if (photos.length === 0) {
    return (
      <div className="slideshow-stage">
        <p className="slideshow-empty">
          Add photos to <code>public/photos</code> and list them in{' '}
          <code>public/data/photos.json</code> to see them here.
        </p>
      </div>
    );
  }

  return (
    <div
      className="slideshow-stage"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="slideshow-heading">
        <SprigLeft className="slideshow-sprig" />
        <h2>Every reason, in pictures</h2>
        <SprigRight className="slideshow-sprig" />
      </div>

      <div className="slideshow-frame">
        {photos.map((photo, photoIndex) => (
          <img
            key={photo}
            src={`/photos/${photo}`}
            alt=""
            className={`slideshow-image ${photoIndex === index ? 'is-active' : ''}`}
          />
        ))}

        <div className="slideshow-frame-border" />

        <button type="button" className="slideshow-nav slideshow-nav-prev" onClick={prev} aria-label="Previous photo">
          <ChevronLeft />
        </button>
        <button type="button" className="slideshow-nav slideshow-nav-next" onClick={next} aria-label="Next photo">
          <ChevronRight />
        </button>
      </div>

      <div className="slideshow-dots">
        {photos.map((photo, dotIndex) => (
          <button
            key={photo}
            type="button"
            className={`slideshow-dot ${dotIndex === index ? 'is-active' : ''}`}
            onClick={() => goTo(dotIndex)}
            aria-label={`Go to photo ${dotIndex + 1}`}
          />
        ))}
      </div>

      <div className="slideshow-footer">
        <LineHeart className="slideshow-footer-heart" filled />
        <span>Yours, always</span>
      </div>
    </div>
  );
}
