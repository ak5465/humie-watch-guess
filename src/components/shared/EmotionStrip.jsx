import { EMOTION_LIST } from '../../data/emotions';

export default function EmotionStrip({
  selectedEmotion,
  onSelect,
}) {
  return (
    <div className="emotion-strip" role="listbox" aria-label="Choose how Humie felt">
      <div className="emotion-strip__track">
        {EMOTION_LIST.map((emotion) => {
          const isSelected = selectedEmotion === emotion.id;

          return (
            <button
              key={emotion.id}
              type="button"
              role="option"
              aria-selected={isSelected}
              className={`emotion-strip__item ${isSelected ? 'emotion-strip__item--selected' : ''}`}
              onClick={() => onSelect(emotion.id)}
            >
              <span className="emotion-strip__frame">
                <img src={emotion.img} alt="" className="emotion-strip__img" />
              </span>
              <span className="emotion-strip__label">{emotion.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
