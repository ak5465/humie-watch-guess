import { EMOTIONS } from '../../data/emotions';
import HumieWithEmotion from '../Humie/HumieWithEmotion';
import SceneThumbnail from '../shared/SceneThumbnail';
import { getRevealMessage, isClipGuessCorrect } from '../../utils/roundFeedback';

export default function RevealScreen({ round, onContinue }) {
  const message = getRevealMessage(round);
  const isCorrect = isClipGuessCorrect(round);
  const chosenScene = round.selectedScene || round.correctScene;

  return (
    <div className={`wg-screen wg-reveal ${isCorrect ? 'wg-reveal--correct' : 'wg-reveal--incorrect'}`}>
      <div className="wg-reveal__coach">
        <HumieWithEmotion emotionId={round.targetEmotion} size="sm" />
        <div className={`speech-bubble wg-reveal__message ${isCorrect ? 'speech-bubble--celebrate' : ''}`}>
          <p>{message.main}</p>
          {message.sub && <p className="sub">{message.sub}</p>}
        </div>
      </div>

      {!isCorrect && (
        <div className="wg-reveal__layout">
          <div className="wg-reveal__panel">
            <p className="wg-reveal__label">What you picked</p>
            {round.roundType === 'effectToCause' ? (
              <SceneThumbnail scene={chosenScene} />
            ) : (
              <p className="wg-reveal__emotion-label">
                {EMOTIONS[round.selectedEmotion]?.label}
              </p>
            )}
          </div>
          <div className="wg-reveal__panel">
            <p className="wg-reveal__label">The clip Humie watched</p>
            <SceneThumbnail scene={round.correctScene} />
          </div>
        </div>
      )}

      {isCorrect && round.roundType === 'effectToCause' && (
        <div className="wg-reveal__correct-clip">
          <SceneThumbnail scene={round.correctScene} />
        </div>
      )}

      <button type="button" className="btn-primary" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
