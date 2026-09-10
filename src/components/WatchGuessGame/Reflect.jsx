import HumieWithEmotion from '../Humie/HumieWithEmotion';

export default function Reflect({ emotionId, onAnswer }) {
  return (
    <div className="wg-screen wg-reflect">
      <div className="wg-reflect__coach">
        <HumieWithEmotion emotionId={emotionId} size="sm" />
        <div className="speech-bubble">
          <p>Have you ever felt this way?</p>
          <p className="sub">It's okay either way.</p>
        </div>
      </div>

      <div className="wg-reflect__buttons">
        <button type="button" className="reflection-btn yes" onClick={() => onAnswer(true)}>
          Yes
        </button>
        <button type="button" className="reflection-btn no" onClick={() => onAnswer(false)}>
          No
        </button>
      </div>
    </div>
  );
}
