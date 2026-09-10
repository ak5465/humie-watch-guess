import HumieAssembled from '../Humie/HumieAssembled';

export default function ModeIntro({ onStart }) {
  return (
    <div className="wg-screen wg-intro">
      <div className="wg-intro__hero">
        <h1 className="wg-intro__title">
          What has <span className="wg-intro__humie-name">Humie</span>
          <br />
          been watching?
        </h1>

        <div className="wg-intro__start-wrap">
          <button type="button" className="btn-primary wg-intro__start" onClick={onStart}>
            Let's Play
          </button>
        </div>

        <div className="wg-intro__character">
          <HumieAssembled size="lg" className="wg-intro__humie" />
          <div className="wg-intro__tv" aria-hidden="true">
            <div className="wg-intro__tv-screen">
              <div className="wg-intro__tv-screen-inner" />
            </div>
            <div className="wg-intro__tv-stand" />
          </div>
        </div>
      </div>
    </div>
  );
}
