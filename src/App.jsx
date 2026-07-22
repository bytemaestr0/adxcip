import { useEffect, useState } from 'react';
import Envelope from './Envelope';
import Slideshow from './Slideshow';
import './App.css';

const STAGE = {
  LETTER: 'letter',
  SLIDESHOW: 'slideshow',
};

function App() {
  const [stage, setStage] = useState(STAGE.LETTER);
  const [cardsData, setCardsData] = useState(null);
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch('/data/cards.json').then((res) => res.json()),
      fetch('/data/photos.json').then((res) => res.json()),
    ])
      .then(([cards, photoData]) => {
        setCardsData(cards);
        setPhotos(photoData.photos || []);
      })
      .catch(() => {
        setCardsData({ envelope: { greeting: 'For you', hint: '' }, cards: [] });
      });
  }, []);

  function handleFinish() {
    setStage(STAGE.SLIDESHOW);
  }

  if (!cardsData) {
    return <div className="app-loading" />;
  }

  return (
    <div className="app-root">
      {stage === STAGE.LETTER && (
        <Envelope
          greeting={cardsData.envelope?.greeting || 'For you'}
          hint={cardsData.envelope?.hint || ''}
          cards={cardsData.cards || []}
          onFinish={handleFinish}
        />
      )}

      {stage === STAGE.SLIDESHOW && <Slideshow photos={photos} />}
    </div>
  );
}

export default App;
