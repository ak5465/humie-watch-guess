import './Humie.css';

export default function HumieAssembled({ className = '', size = 'md' }) {
  return (
    <div className={`humie-assembled humie-assembled--${size} ${className}`.trim()}>
      <img src="/assets/humieLeftArm.png" alt="" className="humie-left-arm" />
      <img src="/assets/humieRightArm.png" alt="" className="humie-right-arm" />
      <img src="/assets/humieBody.png" alt="Humie" className="humie-body" />
      <img src="/assets/humieEyesOpen.png" alt="" className="humie-eyes-open" />
      <img src="/assets/humieEyesClosed.svg" alt="" className="humie-eyes-closed" />
    </div>
  );
}
