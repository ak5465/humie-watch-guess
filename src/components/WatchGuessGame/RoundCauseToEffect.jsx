import HumieAssembled from '../Humie/HumieAssembled';
import EmotionStrip from '../shared/EmotionStrip';
import { FeaturedClipPlayer } from '../shared/FilmstripPicker';

export default function RoundCauseToEffect({
  round,
  onSelectEmotion,
  onContinue,
}) {
  const hasSelection = Boolean(round.selectedEmotion);

  return (
    <div className="wg-screen wg-round wg-round--cause">
      <div className="wg-round__layout">
        <div className="wg-round__prompt-panel">
          <HumieAssembled size="sm" className="wg-round__neutral-humie" />
          <div className="speech-bubble">
            <p>Watch this clip.</p>
            <p className="sub">How do you think Humie felt?</p>
          </div>
        </div>

        <div className="wg-round__video-area">
          <FeaturedClipPlayer scene={round.correctScene} />
          <EmotionStrip
            selectedEmotion={round.selectedEmotion}
            onSelect={onSelectEmotion}
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
