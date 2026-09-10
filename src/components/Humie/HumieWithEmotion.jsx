import { EMOTIONS } from '../../data/emotions';
import HumieAssembled from './HumieAssembled';
import './Humie.css';

export default function HumieWithEmotion({
  emotionId,
  className = '',
  size = 'md',
  showLabel = false,
}) {
  const emotion = EMOTIONS[emotionId];

  return (
    <div className={`humie-with-emotion humie-with-emotion--${size} ${className}`.trim()}>
      {emotion?.humieSprite ? (
        <img
          src={emotion.humieSprite}
          alt="Humie"
          className="humie-with-emotion__sprite"
        />
      ) : (
        <HumieAssembled size={size} />
      )}
      {showLabel && emotion && (
        <p className="humie-with-emotion__label">{emotion.label}</p>
      )}
    </div>
  );
}
