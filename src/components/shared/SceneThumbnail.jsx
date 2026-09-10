import YouTubeClipPlayer from './YouTubeClipPlayer';

export default function SceneThumbnail({
  scene,
  selected = false,
  onSelect,
  showPlayer = false,
  className = '',
}) {
  return (
    <div
      className={`scene-thumb ${selected ? 'scene-thumb--selected' : ''} ${className}`.trim()}
    >
      {showPlayer ? (
        <YouTubeClipPlayer scene={scene} hideSpoilers />
      ) : (
        <button
          type="button"
          className="scene-thumb__button"
          onClick={() => onSelect?.(scene)}
          aria-label="Choose clip"
        >
          <img src={scene.thumbnail} alt="" className="scene-thumb__image" />
          <span className="scene-thumb__overlay">
            <span className="scene-thumb__play">▶</span>
          </span>
        </button>
      )}
      <p className="scene-thumb__title">{scene.title}</p>
    </div>
  );
}
