import { EMOTIONS } from '../../data/emotions';
import HumieWithEmotion from '../Humie/HumieWithEmotion';
import SceneThumbnail from '../shared/SceneThumbnail';
import { getRevealMessage, isClipGuessCorrect } from '../../utils/roundFeedback';

function EmotionPick({ emotionId }) {
  const emotion = EMOTIONS[emotionId];
  if (!emotion) return null;

  return (
    <div className="wg-reveal__emotion-pick">
      <img src={emotion.img} alt="" className="wg-reveal__emotion-img" />
      <p className="wg-reveal__emotion-label">{emotion.label}</p>
    </div>
  );
}

export default function RevealScreen({ round, onContinue }) {
  const message = getRevealMessage(round);
  const isCorrect = isClipGuessCorrect(round);
  const isEffectToCause = round.roundType === 'effectToCause';
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
            {isEffectToCause ? (
              <SceneThumbnail scene={chosenScene} />
            ) : (
              <EmotionPick emotionId={round.selectedEmotion} />
            )}
          </div>
          <div className="wg-reveal__panel">
            <p className="wg-reveal__label">
              {isEffectToCause ? 'The clip Humie watched' : 'How Humie felt'}
            </p>
            {isEffectToCause ? (
              <SceneThumbnail scene={round.correctScene} />
            ) : (
              <EmotionPick emotionId={round.targetEmotion} />
            )}
          </div>
        </div>
      )}

      {isCorrect && isEffectToCause && (
        <div className="wg-reveal__correct-clip">
          <SceneThumbnail scene={round.correctScene} />
        </div>
      )}

      {isCorrect && !isEffectToCause && (
        <EmotionPick emotionId={round.targetEmotion} />
      )}

      <button type="button" className="btn-primary" onClick={onContinue}>
        Continue
      </button>
    </div>
  );
}
