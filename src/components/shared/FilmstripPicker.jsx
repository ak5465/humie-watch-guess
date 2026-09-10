import YouTubeClipPlayer from './YouTubeClipPlayer';

export default function FilmstripPicker({
  scenes,
  activeScene,
  selectedScene,
  onSelect,
}) {
  return (
    <div className="filmstrip" role="listbox" aria-label="Choose a show clip">
      <div className="filmstrip__track">
        {scenes.map((scene) => {
          const isActive = activeScene?.id === scene.id;
          const isSelected = selectedScene?.id === scene.id;

          return (
            <button
              key={scene.id}
              type="button"
              role="option"
              aria-selected={isSelected}
              className={`filmstrip__item ${isActive ? 'filmstrip__item--active' : ''} ${isSelected ? 'filmstrip__item--selected' : ''}`}
              onClick={() => onSelect(scene)}
            >
              <span className="filmstrip__frame">
                <img src={scene.thumbnail} alt="" className="filmstrip__image" />
                <span className="filmstrip__play">▶</span>
              </span>
              <span className="filmstrip__label">{scene.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export function FeaturedClipPlayer({ scene, className = '' }) {
  if (!scene) {
    return (
      <div className={`featured-clip featured-clip--empty ${className}`.trim()}>
        <p>Pick a clip from the film strip below</p>
      </div>
    );
  }

  return (
    <div className={`featured-clip ${className}`.trim()}>
      <div className="featured-clip__screen">
        <YouTubeClipPlayer
          key={scene.id}
          scene={scene}
          featured
          hideSpoilers={false}
          className="featured-clip__player"
        />
      </div>
      <p className="featured-clip__title">{scene.title}</p>
    </div>
  );
}
