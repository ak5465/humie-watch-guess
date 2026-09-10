import { EMOTIONS } from '../../data/emotions';
import HumieWithEmotion from '../Humie/HumieWithEmotion';
import { getReasonFeedback, isReasonCorrect } from '../../utils/roundFeedback';

export default function AskWhy({ round, onSelectReason, onContinue }) {
  const reasons = round.correctScene.reasonOptions || [];
  const hasSelection = Boolean(round.selectedReason);
  const emotion = EMOTIONS[round.targetEmotion];
  const feedback = getReasonFeedback(round);
  const reasonIsCorrect = isReasonCorrect(round);

  return (
    <div className="wg-screen wg-ask-why">
      <div className="wg-ask-why__coach">
        <HumieWithEmotion emotionId={round.targetEmotion} size="sm" />
        <div className="speech-bubble">
          <p>
            Why do you think Humie felt {emotion?.label.toLowerCase()}?
          </p>
        </div>
      </div>

      <div className="wg-ask-why__chips">
        {reasons.map((reason) => (
          <button
            key={reason.id}
            type="button"
            className={`reason-chip ${round.selectedReason === reason.id ? 'reason-chip--selected' : ''}`}
            onClick={() => onSelectReason(reason.id)}
          >
            {reason.label}
          </button>
        ))}
      </div>

      {hasSelection && feedback && (
        <div className={`speech-bubble wg-ask-why__feedback ${reasonIsCorrect ? 'speech-bubble--celebrate' : ''}`}>
          <p>{feedback}</p>
        </div>
      )}

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
