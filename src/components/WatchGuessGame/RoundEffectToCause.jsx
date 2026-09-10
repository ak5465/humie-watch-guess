import { useState } from 'react';
import { EMOTIONS } from '../../data/emotions';
import HumieWithEmotion from '../Humie/HumieWithEmotion';
import FilmstripPicker, { FeaturedClipPlayer } from '../shared/FilmstripPicker';

export default function RoundEffectToCause({
  round,
  onSelectScene,
  onContinue,
}) {
  const targetEmotion = EMOTIONS[round.targetEmotion];
  const hasSelection = Boolean(round.selectedScene);
  const [previewScene, setPreviewScene] = useState(
    round.selectedScene || round.options[0] || null,
  );

  const handleStripSelect = (scene) => {
    setPreviewScene(scene);
    onSelectScene(scene);
  };

  return (
    <div className="wg-screen wg-round wg-round--effect">
      <div className="wg-round__layout">
        <div className="wg-round__prompt-panel">
          <HumieWithEmotion emotionId={round.targetEmotion} size="sm" />
          <div className="speech-bubble">
            <p>Humie feels {targetEmotion?.label.toLowerCase()}.</p>
            <p className="sub">What did Humie watch?</p>
          </div>
        </div>

        <div className="wg-round__video-area">
          <FeaturedClipPlayer scene={previewScene} />
          <FilmstripPicker
            scenes={round.options}
            activeScene={previewScene}
            selectedScene={round.selectedScene}
            onSelect={handleStripSelect}
          />
        </div>
      </div>

      <button
        type="button"
        className="btn-primary"
        disabled={!hasSelection}
        onClick={onContinue}
      >
        Continue
      </button>
    </div>
  );
}
