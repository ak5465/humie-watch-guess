import HumieAssembled from '../Humie/HumieAssembled';

export default function GoodbyeOrNext({ onWatchAnother, onAllDone }) {
  return (
    <div className="wg-screen wg-goodbye">
      <HumieAssembled size="md" className="wg-goodbye__humie" />

      <div className="speech-bubble centered">
        <p>Thanks for watching and guessing with me!</p>
        <p className="sub">Want to try another round?</p>
      </div>

      <div className="button-stack wg-goodbye__actions">
        <button type="button" className="btn-primary" onClick={onWatchAnother}>
          Watch Another
        </button>
        <button type="button" className="btn-secondary" onClick={onAllDone}>
          All Done
        </button>
      </div>
    </div>
  );
}
