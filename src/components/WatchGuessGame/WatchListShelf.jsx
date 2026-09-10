import SceneThumbnail from '../shared/SceneThumbnail';

export default function WatchListShelf({ scenes, onContinue, continueLabel = "Let's play!" }) {
  return (
    <div className="wg-screen wg-shelf">
      <div className="wg-screen__header">
        <h1>Humie's watch list</h1>
        <p>These are the shows Humie has been watching lately.</p>
      </div>

      <div className="wg-shelf__grid">
        {scenes.map((scene) => (
          <SceneThumbnail key={scene.id} scene={scene} />
        ))}
      </div>

      <button type="button" className="btn-primary" onClick={onContinue}>
        {continueLabel}
      </button>
    </div>
  );
}
