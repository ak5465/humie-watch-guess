import { publicUrl } from '../../utils/publicUrl';
import './Humie.css';

export default function HumieAssembled({ className = '', size = 'md' }) {
  return (
    <div className={`humie-assembled humie-assembled--${size} ${className}`.trim()}>
      <img src={publicUrl('/assets/humieLeftArm.png')} alt="" className="humie-left-arm" />
      <img src={publicUrl('/assets/humieRightArm.png')} alt="" className="humie-right-arm" />
      <img src={publicUrl('/assets/humieBody.png')} alt="Humie" className="humie-body" />
      <img src={publicUrl('/assets/humieEyesOpen.png')} alt="" className="humie-eyes-open" />
      <img src={publicUrl('/assets/humieEyesClosed.svg')} alt="" className="humie-eyes-closed" />
    </div>
  );
}
